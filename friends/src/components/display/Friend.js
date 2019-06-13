import React, {Component} from 'react';
import './Friend.css';

class Friend extends Component {
    render() {
        return (
            <div key={this.props.friend.id} className="Friend">
                <a className="EditAnchor"  onClick={() => this.props.editHandler(this.props.friend.id)}>Edit</a>
                <a className="DeleteAnchor" onClick={() => this.props.deleteHandler(this.props.friend.id)}>Delete</a>
                <ul>
                    <p><strong>Name: </strong>{this.props.friend.name}</p>
                    <p><strong>Age: </strong>{this.props.friend.age}</p>
                    <p><strong>E-mail: </strong>{this.props.friend.email}</p>
                </ul>
                <br/>
            </div>
        );
    }
}

export default Friend;
