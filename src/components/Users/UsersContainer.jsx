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
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getUsersFormProps,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getIsFollingProgress,
} from "../../redux/users-selectors";

const mapStateToProps = (state) => {
  return {
    users: getUsersFormProps(state),
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
  acceptFollow,
  acceptUnfollow,
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
  }, []);

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

export default compose(
  connect(mapStateToProps, {
    acceptFollow,
    acceptUnfollow,
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
