import React from "react";
import { Link } from "react-router-dom";
import * as axios from "axios";
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
            axios
              .delete(
                `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "be9a2f09-e73c-47b1-938e-5e4d5e8badb9",
                  },
                }
              )
              .then((response) => {
                if (response.data.resultCode === 0) {
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
            axios
              .post(
                `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                {},
                {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "be9a2f09-e73c-47b1-938e-5e4d5e8badb9",
                  },
                }
              )
              .then((response) => {
                if (response.data.resultCode === 0) {
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
