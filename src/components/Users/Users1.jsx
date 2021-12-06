import React from "react";
import Avatar from "../Avatar/Avatar";
import * as axios from "axios";

class Users extends React.Component {
  getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.SetUsers(response.data.items);
        });
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.getUsers}>GetUsers</button>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <Avatar />
            {user.followed ? (
              <button onClick={unfollow}>unfollow</button>
            ) : (
              <button onClick={follow}>follow</button>
            )}
            <div>{this.props.user.name}</div>
            <div>{this.props.user.status}</div>
            <div>{"user.country"}</div>
            <div>{"user.city"}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
