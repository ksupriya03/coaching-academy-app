import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Form from './Form';
import { Userdashboard } from './Userdashboard';

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
  }
  onEmailChange = email => {
    this.setState({ email: email });
  };

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/Userdashboard/" component={Userdashboard} />
            {/* <Route
              exact
              path="/"
              render={() => <Form onEmailChange={this.onEmailChange} />}
            /> */}
            {/* <Route
              path="/Userdashboard"
              render={() => <Userdashboard email={this.state.email} />}
            /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}
