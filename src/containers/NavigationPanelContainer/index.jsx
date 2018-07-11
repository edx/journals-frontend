import { connect } from 'react-redux';

import NavigationPanel from '../../components/NavigationPanel';

const mapStateToProps = state => (
  {
    navPanelOpen: state.navigation.open,
  }
);

const mapDispatchToProps = () => (
  {
  }
);

const NavigationPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationPanel);

export default NavigationPanelContainer;
