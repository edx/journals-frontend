import { connect } from 'react-redux';

import NavToggle from '../../components/NavToggle';
import toggleNavigationPanel from '../../data/actions/navigation';

const mapStateToProps = state => (
  {
    navPanelOpen: state.navPanelOpen,
  }
);

const mapDispatchToProps = dispatch => (
  {
    toggleNavigationPanel: () => dispatch(toggleNavigationPanel()),
  }
);

const NavToggleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavToggle);

export default NavToggleContainer;
