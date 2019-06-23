import React, {Component} from 'react';
import './FriendList.css';
import Friend from './Friend';
import FriendForm from './FriendForm';

class FriendList extends Component {
    render(){
      return (
        <div className="FriendList">
        {
            this.props.friends.map (
                friend => 
                    this.props.editList.findIndex(editId => editId === friend.id) === -1 
                    ? <Friend key={friend.id} friend={friend} {...this.props} />
                    : <FriendForm key={friend.id} friend={friend} {...this.props} />
            )
        }
        </div>
      );
  }
}

export default FriendList;
