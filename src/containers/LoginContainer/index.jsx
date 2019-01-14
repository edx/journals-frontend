import { connect } from 'react-redux';

import LoginPage from '../../components/LoginPage';

const mapStateToProps = state => (
  {
    lmsIntegration: state.siteInfo.lmsIntegration,
  }
);

const mapDispatchToProps = () => (
  {
  }
);

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);

export default LoginContainer;
