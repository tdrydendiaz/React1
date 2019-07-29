import React, { Component } from 'react';


// export class SubComponent extends Component {

//     render() {
//         this.props.onRender();
//         return (
//             <div>
//                 <p>This code is within SubComponent</p>
//                 <p>The number passed to SubComponent was: {this.props.sentNumber}</p>
//             </div>
//         )
//     }
// }


export class SubComponent extends Component {

    render() {
        this.props.onRender();
        return (
            <div>
                <p>This code is within SubComponent</p>
            </div>
        )
    }
}


export default SubComponent;