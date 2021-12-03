import React from "react-dom";
import Avatar from "../Avatar/Avatar";

const Users = ({users, follow, unfollow}) => {
  return <div>
    {
      users.map(user => (
      <div key={user.id}>
        <Avatar />
        {user.followed ? <button onClick={unfollow}>unfollow</button> : <button onClick={follow}>follow</button>}
        <div>{user.fullName}</div>
        <div>{user.status}</div>
        <div>{user.country}</div>
        <div>{user.city}</div>
      </div>
      ))
    }
  </div>
}

export default Users