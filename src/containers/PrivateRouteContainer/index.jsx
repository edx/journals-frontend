import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PrivateRoute from '../../components/PrivateRoute';
import settings from '../../data/configuration/constants';

const mapStateToProps = state => ({
  loginPath: `${settings.journalsBackendBaseUrl}/require_auth?forward=${encodeURI(window.location.href)}`,
  isAuthenticated: state.userInfo.isAuthenticated,
  userInfoFinishedFetching: state.userInfo.finishedFetching,
});

const PrivateRouteContainer = connect(mapStateToProps)(PrivateRoute);

export default withRouter(PrivateRouteContainer);
