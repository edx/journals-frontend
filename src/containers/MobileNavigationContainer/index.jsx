import { connect } from 'react-redux';

import MobileNavigation from '../../components/MobileNavigation';

const mapStateToProps = state => (
  {
    navPanelOpen: state.navigation.open,
  }
);

const mapDispatchToProps = () => (
  {
  }
);

const MobileNavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MobileNavigation);

export default MobileNavigationContainer;
