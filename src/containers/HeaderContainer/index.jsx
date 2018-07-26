import { connect } from 'react-redux';

import Header from '../../components/Header';
import fetchUserInfo from '../../data/actions/userInfo';
import settings from '../../data/configuration/constants';

const mapStateToProps = state => (
  {
    username: state.userInfo.username,
    isAuthenticated: state.userInfo.isAuthenticated,
    loginPath: `${settings.journalsBackendBaseUrl}/require_auth?forward=${encodeURI(window.location.href)}`,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getUserInfo: () => dispatch(fetchUserInfo()),
  }
);

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
