import React, { Component } from 'react';
import logo from './81yMCyREEyL._SX425_.jpg';
//'./logo.svg';
import './App.css';
import User from './User/User.js';
import UserDetail from './User/UserDetail.js';
import SubComponent from './User/SubComponent'


class App extends Component {
  // number = 5;
  render() {
    return (
      <div className="App">
        <p>This is the app Component</p>
        {/* <SubComponent sentNumber={this.number}></SubComponent> */}
        <SubComponent onRender={() => this.whenSubComponentRender()}></SubComponent>
        <User />
        <UserDetail />

      </div>
    );
  }
    whenSubComponentRender() {
    console.log('sub component rendered');

}
}
export default App;
