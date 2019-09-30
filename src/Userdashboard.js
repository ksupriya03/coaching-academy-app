import React from 'react';

/* export function Userdashboard(props) {
  return <div>hi</div>;
} */
export class Userdashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('prop val is' + this.props.location.state.email);
    return <div>Welcome,{this.props.location.state.email}</div>;
  }
}
//export default Userdashboard;
