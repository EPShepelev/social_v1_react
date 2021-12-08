import React from "react";
import Avatar from "../Avatar/Avatar";

const User = ({user, follow, unfollow}) => {
  return (
    <div>
      <Avatar avatar={user.photos.small}/>
      {user.followed ? (
        <button onClick={() => {unfollow(user.id)}}>unfollow</button>
      ) : (
        <button onClick={() => {follow(user.id)}}>follow</button>
      )}
      <div>{user.name}</div>
      <div>{user.status}</div>
      <div>{"user.country"}</div>
      <div>{"user.city"}</div>
    </div>
  )
}

export default User