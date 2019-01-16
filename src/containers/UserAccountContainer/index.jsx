import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createAccount } from '../../data/actions/account';
import UserAccount from '../../components/UserAccount';


const mapStateToProps = state => (
  {
    username: state.account.username,
    email: state.account.email,
    errorCreating: state.account.errorCreating,
    startedCreating: state.account.startedCreating,
    finishedCreating: state.account.finishedCreating,
  }
);

const mapDispatchToProps = dispatch => (
  {
    createAccount: (email, username, password) => dispatch(createAccount(
      email,
      username,
      password,
    )),
  }
);

const UserAccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserAccount);


export default UserAccountContainer;
