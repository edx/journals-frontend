import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Button, Icon } from '@edx/paragon';
import { Link } from 'react-router-dom';
import { ErrorMessage, Formik, FormikProps, Form, Field } from 'formik';
import ErrorPage from '../ErrorPage';
import StatusAlert from '../StatusAlert';


class UserLogout extends React.Component {
  render() {
    if (!this.props.errorLogin && this.props.finishedLogin) {
      return <Redirect push to="/" />;
    }

    return (
      <div>
        { this.props.errorLogin &&
          <div>
            <h2>Error Occurred</h2>
            <StatusAlert
              alertType="danger"
              iconClassName={['fa', 'fa-times-circle']}
              message={this.props.errorLogin.message}
            />
          </div>
        }
        <h2>Login</h2>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validate={(values) => {
            let errors = [];
            //  check if my values have errors
            // if (values.email !== 'bfiller@gmail.com') {
            //   errors.push('Invalid email address');
            // }
            if (!values.username) {
              errors.username = 'Valid Username Required';
            }
            return errors;
        }}
          onSubmit={(values) => {
            console.log('calling login...');
            this.props.loginAccount(values.username, values.password);
            // setTimeout(() => {
            //   // eslint-disable-next-line no-alert
            //   this.props.createAccount(values.email, values.username, values.password);
            //   // alert(JSON.stringify(values, null, 2));
            // }, 500);
          }}
          render={formProps => (
            <Form>
              <div className="row mt-2">
                <div className="col-lg-2">
                  <label htmlFor="username">Username</label>
                </div>
                <div className="col-lg-10">
                  <Field name="username" placeholder="" />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-lg-2">
                  <label htmlFor="password">Password</label>
                </div>
                <div className="col-lg-10">
                  <Field name="password" type="password" placeholder="" />
                </div>
              </div>

              <div className="row mt-2">
                <div className="offset-lg-2 col-lg-10">
                  <button type="submit" disabled={this.props.startedLogin}>
                    {this.props.startedLogin && !this.props.finishedLogin ? 'Logging in..' : 'Login'}
                  </button>
                </div>
              </div>
            </Form>
            )} // end of Formik render
        />
      </div>
    );
  }
}

UserLogout.defaultProps = {
  startedLogin: false,
  finishedLogin: false,
  errorLogin: null,
  loginAccount: () => {},
  getSiteInfo: () => {},
};

UserLogout.propTypes = {
  errorLogin: PropTypes.instanceOf(Error),
  startedLogin: PropTypes.bool,
  finishedLogin: PropTypes.bool,
  loginAccount: PropTypes.func,
  getSiteInfo: PropTypes.func,
};


export default UserLogout;
