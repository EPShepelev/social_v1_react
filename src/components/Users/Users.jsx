import React from "react";
import style from "./Users.module.css";
import User from "../User/User";

const Users = ({
  follow,
  unfollow,
  users,
  acceptFollow,
  acceptUnfollow,
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
    <div>
      <div className={style.paginationList}>
        {pages.map((page) => {
          return (
            <span
              key={page}
              className={currentPage === page ? style.active : ""}
              onClick={(e) => {
                onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          follow={follow}
          unfollow={unfollow}
          acceptFollow={acceptFollow}
          acceptUnfollow={acceptUnfollow}
          isFollingProgress={isFollingProgress}
          toggleFollingProgress={toggleFollingProgress}
        />
      ))}
    </div>
  );
};

export default Users;
