import React, { useEffect } from "react";
import Avatar from "../Avatar/Avatar";
import * as axios from "axios";

const Users = ({ users, follow, unfollow, setUsers }) => {

  useEffect(() => {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          setUsers(response.data.items);
        });
  }, [setUsers]);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <Avatar />
          {user.followed ? (
            <button onClick={unfollow}>unfollow</button>
          ) : (
            <button onClick={follow}>follow</button>
          )}
          <div>{user.name}</div>
          <div>{user.status}</div>
          <div>{"user.country"}</div>
          <div>{"user.city"}</div>
        </div>
      ))}
    </div>
  );
};

export default Users;
