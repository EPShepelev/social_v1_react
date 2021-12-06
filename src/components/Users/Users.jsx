import React from "react";
import Avatar from "../Avatar/Avatar";
import style from "./Users.module.css";


const Users = ({users, follow, unfollow, pageSize, totalUsersCount, currentPage, onPageChanged}) => {
  let pagesCount = Math.ceil(totalUsersCount/pageSize);
  const pages = [];
  for (let i = 1; i<=pagesCount; i++) {
    pages.push(i);
  }

return (
  <div>
    <div className={style.paginationList}>
      {pages.map(page => {
        return <span className={currentPage === page && style.active} onClick={(e)=>{onPageChanged(page)}}>{page}</span>
      })}
    </div>
    {users.map((user) => (
      <div key={user.id}>
        <Avatar />
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
    ))}
  </div>
);
}

export default Users