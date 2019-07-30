import React, { Component } from 'react';


class UserDetail extends Component {
    constructor() {
        super();
        this.state = {
            town: "Salford"
        }
        this.addClick = this.addClick.bind(this)

    }

    addClick() {
        this.setState({
            town: document.getElementById('click').value
        }
        )
    }


    render() {
        return (
            <div>
                <p>userDetails page works!</p>
                <p>Town of birth: {this.props.userData.town} </p>
                <input id='click' />
                <p>
                    {this.state.town}
                </p>
                <button
                    onClick={this.addClick}>
                    Change Town
                </button>

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
