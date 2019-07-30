import React, { Component } from 'react';

class Timestamp extends Component {


    constructor() {
        super();
        this.state = {
            time: new Date()
        }
        this.addClick = this.addClick.bind(this)

    }

    addClick() {
        this.setState({ time: new Date() });
    }



    render() {
        return (
            <div>
                <p>This is the time</p>
                <button
                    onClick={this.addClick}>
                    Click me for the time ^_^
                </button>
<p>
                 {this.state.time.toLocaleString()}
                 </p>
            </div>

        );
    }
}



// stateHandle= () => {
//     this.setState({
//         date:new Date()
//     });
// }

// onclick= {this.stateHandle}


export default Timestamp;