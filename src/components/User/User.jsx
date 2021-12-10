import React from "react";
import { Link } from "react-router-dom";
import { UsersAPI } from "../../api/api";
import Avatar from "../Avatar/Avatar";

const User = ({
  user,
  follow,
  unfollow,
  isFollingProgress,
  toggleFollingProgress,
}) => {
  return (
    <div>
      <Link to={`/profile/${user.id}`}>
        <Avatar avatar={user.photos.small} />
      </Link>
      {user.followed ? (
        <button
          disabled={isFollingProgress.some(id => id === user.id)}
          onClick={() => {
            toggleFollingProgress(true, user.id);
            UsersAPI.unfollowUser(user.id).then((data) => {
              if (data.resultCode === 0) {
                unfollow(user.id);
              }
              toggleFollingProgress(false, user.id);
            });
          }}
        >
          unfollow
        </button>
      ) : (
        <button
          disabled={isFollingProgress.some(id=> id === user.id)}
          onClick={() => {
            toggleFollingProgress(true, user.id);
            UsersAPI.followUser(user.id).then((data) => {
              if (data.resultCode === 0) {
                follow(user.id);
              }
              toggleFollingProgress(false, user.id);
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
