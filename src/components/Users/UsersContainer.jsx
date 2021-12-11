import React, { useEffect } from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  acceptFollow,
  acceptUnfollow,
  toggleFollingProgress,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  getUsers,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollingProgress: state.usersPage.isFollingProgress,
  };
};

const UsersContainer = ({
  users,
  follow,
  unfollow,
  acceptFollow,
  acceptUnfollow,
  isFetching,
  isFollingProgress,
  toggleFollingProgress,
  setUsers,
  pageSize,
  totalUsersCount,
  currentPage,
  setCurrentPage,
  setTotalUsersCount,
  getUsers,
}) => {
  const onPageChanged = (page, pageSize) => {
    getUsers(page, pageSize);
  };

  useEffect(() => {
    getUsers(currentPage, pageSize);
  }, [setUsers]);

  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Users
        users={users}
        follow={follow}
        unfollow={unfollow}
        acceptFollow={acceptFollow}
        acceptUnfollow={acceptUnfollow}
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        isFollingProgress={isFollingProgress}
        toggleFollingProgress={toggleFollingProgress}
      />
    </>
  );
};

export default connect(mapStateToProps, {
  acceptFollow,
  acceptUnfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleFollingProgress,
  getUsers,
  follow,
  unfollow,
})(UsersContainer);
