import React from "react";
import { Link } from "react-router-dom";
import { UsersAPI } from "../../api/api";
import Avatar from "../Avatar/Avatar";

const User = ({ user, follow, unfollow }) => {
  return (
    <div>
      <Link to={`/profile/${user.id}`}>
        <Avatar avatar={user.photos.small} />
      </Link>
      {user.followed ? (
        <button
          onClick={() => {
            UsersAPI.unfollowUser(user.id)
              .then((data) => {
                if (data.resultCode === 0) {
                  unfollow(user.id);
                }
              });
          }}
        >
          unfollow
        </button>
      ) : (
        <button
          onClick={() => {
            UsersAPI.followUser(user.id)
              .then((data) => {
                if (data.resultCode === 0) {
                  follow(user.id);
                }
              });
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
