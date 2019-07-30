import React, { Component } from 'react';


class UserDetail extends Component {

    render() {
        return (
            <div>
                <p>userDetails page works!</p>
                <p>Town of birth: {this.props.userData.town} </p>
            </div>
        );
    }
}


// stateLocation= () => {
//     this.setState({
//         location:""
//     });
// }



export default UserDetail;
