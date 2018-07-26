import { connect } from 'react-redux';

import PrivateRoute from '../../components/PrivateRoute';
import settings from '../../data/configuration/constants';

const mapStateToProps = state => ({
  loginPath: `${settings.journalsBackendBaseUrl}/require_auth?forward=${encodeURI(window.location.href)}`,
  isAuthenticated: state.userInfo.isAuthenticated,
  userInfoFinishedFetching: state.userInfo.finishedFetching,
});

export default connect(mapStateToProps)(PrivateRoute);
