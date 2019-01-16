import { connect } from 'react-redux';
import { loginAccount } from '../../data/actions/account';
import UserLogin from '../../components/UserLogin';
import fetchSiteInfo from '../../data/actions/siteInfo';

const mapStateToProps = state => (
  {
    username: state.account.username,
    email: state.account.email,
    errorLogin: state.account.errorLogin,
    startedLogin: state.account.startedLogin,
    finishedLogin: state.account.finishedLogin,
  }
);

const mapDispatchToProps = dispatch => (
  {
    loginAccount: (username, password) => dispatch(loginAccount(
      username,
      password,
    )),
    getSiteInfo: () => dispatch(fetchSiteInfo()),
  }
);

const UserLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserLogin);

export default UserLoginContainer;
