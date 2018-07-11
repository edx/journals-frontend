import { connect } from 'react-redux';

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

export default MainContentContainer;
