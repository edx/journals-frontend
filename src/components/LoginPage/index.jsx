import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Textarea from '../Textarea';
import './LoginPage.scss';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      pwdValue: '',
      textAreaValue: 'my text',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch (event.target.id) {
      case 'email':
        this.setState({ emailValue: event.target.value });
        break;
      case 'pwd':
        this.setState({ pwdValue: event.target.value });
        break;
      case 'textAreaValue':
        this.setState({ textAreaValue: event.target.value });
        break;
      default:
        alert('no match for event');
    }
  }

  handleSubmit(event) {
    alert('Form submitted email:' + this.state.emailValue + 'pwd:' + this.state.pwdValue + 'textArea:' + this.state.textAreaValue);
    event.preventDefault();
  }

  render() {
    return (
      <div className="form-container">
        <form action="/handlelogin" method="post" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-lg-3">Email Address:</div>
            <div className="col-lg-9"><input id="email" type="text" value={this.state.emailValue} onChange={this.handleChange} /></div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-3">Password:</div>
            <div className="col-lg-9"><input id="pwd" type="password" value={this.state.pwdValue} onChange={this.handleChange} /></div>
          </div>
          <div className="row mt-2">
            <div className="offset-lg-3 col-lg-9">
              <Textarea id="textArea" name="textarea_1" value={this.state.textAreaValue} onChange={this.handleChange} />
            </div>
          </div>
          <div className="row mt-2">
            <div className="offset-lg-3 col-lg-9">
              <input type="submit" value="Login" />
              {/* <Button
                className={['control-btn']}
                label="Login"
              /> */}
            </div>
          </div>
        </form>
        <div className="row mt-2">
          <div className="col-lg-12">
            <Link to="newuser">New user registration</Link>
          </div>
        </div>
      </div>
    );
  }
}


// LoginPage.propTypes = {
//   lmsIntegration: PropTypes.bool,
// };

export default LoginPage;
