import React from 'react';
import { withRouter } from 'react-router-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ email: e.target.value });
  }
  handleLogin(e) {
    console.log('You Changed the URL' + this.state.email);

    e.preventDefault();
    this.props.history.push('/Userdashboard', { email: this.state.email });
    //this.props.onEmailChange(this.state.email);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <h1>Logon Academy</h1>
          <label>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label>Password</label>
          <input id="password" name="password" type="text" />
          <br />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
//export default Form;
export default Form;
