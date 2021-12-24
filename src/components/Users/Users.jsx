import React from "react";
import style from "./Users.module.css";
import User from "../User/User";
import Paginations from "../common/Pagination/Pagination";

const Users = ({
  follow,
  unfollow,
  users,
  pageSize,
  totalUsersCount,
  currentPage,
  onPageChanged,
  isFollingProgress,
  toggleFollingProgress,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

    return (
      <>
        < Paginations pageSize={pageSize} totalItemsCount={totalUsersCount} currentPage={currentPage} onPageChanged={onPageChanged} />
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            follow={follow}
            unfollow={unfollow}
            isFollingProgress={isFollingProgress}
            toggleFollingProgress={toggleFollingProgress}
          />
        ))}
      </>
    );

};

export default Users;
