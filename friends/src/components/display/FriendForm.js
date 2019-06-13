import React, {Component} from 'react';
import './Friend.css';

class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.friend.id,
          name: this.props.friend.name,
          age: this.props.friend.age,
          email: this.props.friend.email
        };
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit = event => {
        event.preventDefault();
        let editedFriend = {
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        };
        this.props.updateHandler(editedFriend);
    }

    render() {
        return (
            <div key={this.state.id} className="Friend">
                <a className="EditAnchor"  onClick={() => this.props.editHandler(this.state.id)}>Edit</a>
                <a className="DeleteAnchor" onClick={() => this.props.deleteHandler(this.state.id)}>Delete</a>
                <ul>
                    <form onSubmit={this.handleSubmit}>
                        <p><strong>Name: </strong><input name="name" type="text" placeholder={this.state.name} label="Name" value={this.state.name} onChange={this.handleChange} /></p>
                        <p><strong>Age: </strong><input name="age" type="text" placeholder={this.state.age} label="Age" value={this.state.age} onChange={this.handleChange} /></p>
                        <p><strong>E-mail: </strong><input name="email" type="text" placeholder={this.state.email} label="Email" value={this.state.email} onChange={this.handleChange} /></p>
                        <input type="submit" value="Submit" />
                    </form>
                </ul>
                <br/>
            </div>
        );
    }
}

export default FriendForm;
