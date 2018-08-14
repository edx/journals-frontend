import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PrivateRoute from '../../components/PrivateRoute';

const mapStateToProps = state => ({
  loginPath: `${state.siteInfo.serverBaseUrl}/require_auth?forward=${encodeURI(window.location.href)}`,
  isAuthenticated: state.siteInfo.isAuthenticated,
  siteInfoFinishedFetching: state.siteInfo.finishedFetching,
});

const PrivateRouteContainer = connect(mapStateToProps)(PrivateRoute);

export default withRouter(PrivateRouteContainer);
