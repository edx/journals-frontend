import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MainContent from '../../components/MainContent';


const mapStateToProps = state => (
  {
    navPanelOpen: state.navigation.open,
  }
);

const mapDispatchToProps = () => (
  {

  }
);

const MainContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainContent);

export default withRouter(MainContentContainer);
