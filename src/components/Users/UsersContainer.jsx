import React, { useEffect } from "react";
import { UsersAPI } from "../../api/api";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  toggleIsFetching,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

const UsersContainer = ({
  users,
  follow,
  unfollow,
  isFetching,
  toggleIsFetching,
  setUsers,
  pageSize,
  totalUsersCount,
  currentPage,
  setCurrentPage,
  setTotalUsersCount,
}) => {
  const onPageChanged = (page) => {
    setCurrentPage(page);
    toggleIsFetching(true);
    UsersAPI.getUsers(page, pageSize).then((data) => {
      toggleIsFetching(false);
      setUsers(data.items);
    });
  };

  useEffect(() => {
    toggleIsFetching(true);
    UsersAPI.getUsers(currentPage, pageSize).then((data) => {
      toggleIsFetching(false);
      setUsers(data.items);
      setTotalUsersCount(data.totalCount);
    });
  }, [setUsers]);

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
      />
    </>
  );
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
