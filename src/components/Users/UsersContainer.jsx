import React, { useEffect } from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  toggleFollingProgress,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  getUsers,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getUsersFromProps,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getIsFollingProgress,
} from "../../redux/users-selectors";

const mapStateToProps = (state) => {
  return {
    users: getUsersFromProps(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollingProgress: getIsFollingProgress(state),
  };
};

const UsersContainer = ({
  users,
  follow,
  unfollow,
  isFetching,
  isFollingProgress,
  toggleFollingProgress,
  pageSize,
  totalUsersCount,
  currentPage,
  getUsers,
  setCurrentPage,
}) => {
  const onPageChanged = (page, pageSize) => {
    getUsers(page, pageSize);
    setCurrentPage(page);
  };

  useEffect(() => {
    getUsers(currentPage, pageSize);
  }, [currentPage, pageSize, getUsers]);

  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Users
        users={users}
        follow={follow}
        unfollow={unfollow}
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

export default compose(
  connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollingProgress,
    getUsers,
    follow,
    unfollow,
  }),
  withAuthRedirect
)(UsersContainer);
