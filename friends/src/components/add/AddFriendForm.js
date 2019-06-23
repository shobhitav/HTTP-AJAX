import React, {Component} from 'react';
import './AddFriendForm.css';

class AddFriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          age: '',
          email: ''
        };
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit = event => {
        event.preventDefault();
        let newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        };
        this.props.addHandler(newFriend);
    }

    render(){
      return (
      <form onSubmit={this.handleSubmit}>
            <input name="name" type="text" placeholder="Name..." label="Name" value={this.state.name} onChange={this.handleChange} />
            <input name="age" type="text" placeholder="Age..." label="Age" value={this.state.age} onChange={this.handleChange} />
            <input name="email" type="text" placeholder="Email..." label="Email" value={this.state.email} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
        </form>
      );
  }
}

export default AddFriendForm;
