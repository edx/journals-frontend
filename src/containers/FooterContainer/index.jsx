import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Footer from '../../components/Footer';

// TODO: make it so there is only one call to site info per page

const mapStateToProps = state => (
  {
    siteLogo: state.siteInfo.logo,
    footerLinks: state.siteInfo.footerLinks,
    finishedFetching: state.siteInfo.finishedFetching,
  }
);

const mapDispatchToProps = () => (
  {
  }
);

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);

export default withRouter(FooterContainer);
