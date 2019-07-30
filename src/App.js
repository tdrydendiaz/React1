import React, { Component } from 'react';
import logo from './81yMCyREEyL._SX425_.jpg';
//'./logo.svg';
import './App.css';
import User from './User/User.js';
import UserDetail from './User/UserDetail.js';
import SubComponent from './User/SubComponent';
import Timestamp from './User/Timestamp.js';


class App extends Component {
  // number = 5;
  render() {
    return (
      <div className="App">
        <p>This is the app Component</p>
        {/* <SubComponent sentNumber={this.number}></SubComponent> */}
        <SubComponent onRender={() => this.whenSubComponentRender()}></SubComponent>
        <User myUser={this.returnMe()} />
        <Timestamp />
        
      </div>
    );
  }
    whenSubComponentRender() {
    console.log('sub component rendered');

}


returnMe() {
  let aUser;
  aUser={
  fname:"Tania",
  lname:"Diaz",
  town:"London"
  }
return aUser;
}

}

export default App;
