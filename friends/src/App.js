import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './components/display/FriendList';
import AddFriendForm from './components/add/AddFriendForm';

const defaultState = {
  friends:[],
  addForm: false,
  editList:[]
 };

class App extends Component {
  constructor(props){
   super(props);
   this.state = defaultState;
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
     //.then( response => console.log(response))   // To print the response. Note: You cannot consume the response twice
     .then( resp => this.setState( { friends:resp.data, addForm: false} ) )
  }

  showAddForm = () => {
    this.setState({addForm: true});
  }

  addHandler = newFriend => {
    axios.post("http://localhost:5000/friends", newFriend)
    .then(resp => {
      this.setState({friends: resp.data, addForm: false});
    });
  }

  updateHandler = editedFriend => {
    axios.put("http://localhost:5000/friends/"+editedFriend.id, editedFriend)
    .then(resp => {
      this.setState({friends: resp.data, editList: this.state.editList.filter(id => id != editedFriend.id)});
    });    
  }

  editHandler = friendId => {
    this.setState({editList:this.state.editList.concat(friendId)});
  }

  deleteHandler = friendId => {
    axios.delete("http://localhost:5000/friends/"+friendId)
    .then(resp => {
      this.setState({friends: resp.data, addForm: false});
    });    
  }

  render(){
      return (
        <div className="App">          
          <h1 className= "h1">Friendster </h1>
          <button className="Button" onClick={() => this.showAddForm()}>Add</button>
          {this.state.addForm && 
            <AddFriendForm addHandler={this.addHandler}/>
          }
          <FriendList 
            friends={this.state.friends} 
            editHandler={this.editHandler} 
            deleteHandler={this.deleteHandler} 
            updateHandler={this.updateHandler}
            editList={this.state.editList}/>
        </div>
      );
  }
}

export default App;
