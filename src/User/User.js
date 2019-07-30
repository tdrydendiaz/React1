import React, { Component } from 'react';
import UserDetail from "./UserDetail";
class User extends Component {

    render() {
        return (
            <div>
            <p>user page works!</p>
            <h1>User</h1>
        <h3>{this.props.myUser.fname} {this.props.myUser.lname}</h3>
        
        <UserDetail userData={this.props.myUser} /> 
        </div>
        );
    }
}

export default User;
