import { connect } from 'react-redux';
import { logoutAccount } from '../../data/actions/account';
import UserLogout from '../../components/UserLogin';

const mapStateToProps = state => (
  {
    errorLogout: state.account.errorLogout,
    startedLogout: state.account.startedLogout,
    finishedLogout: state.account.finishedLogout,
  }
);

const mapDispatchToProps = dispatch => (
  {
    logoutAccount: () => dispatch(logoutAccount()),
  }
);

const UserLogoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserLogout);

export default UserLogoutContainer;
