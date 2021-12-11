import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";

const User = ({ user, follow, unfollow, isFollingProgress }) => {
  return (
    <div>
      <Link to={`/profile/${user.id}`}>
        <Avatar avatar={user.photos.small} />
      </Link>
      {user.followed ? (
        <button
          disabled={isFollingProgress.some((id) => id === user.id)}
          onClick={() => {
            unfollow(user.id);
          }}
        >
          unfollow
        </button>
      ) : (
        <button
          disabled={isFollingProgress.some((id) => id === user.id)}
          onClick={() => {
            follow(user.id);
          }}
        >
          follow
        </button>
      )}
      <div>{user.name}</div>
      <div>{user.status}</div>
      <div>{"user.country"}</div>
      <div>{"user.city"}</div>
    </div>
  );
};

export default User;
