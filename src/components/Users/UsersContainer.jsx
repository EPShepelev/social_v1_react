import React, { useEffect } from "react";
import * as axios from "axios";
import Users from "./Users";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/users-reducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page))
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountAC(count))
    }
  }
}

const UsersContainer = ({
  users,
  follow,
  unfollow,
  setUsers,
  pageSize,
  totalUsersCount,
  currentPage,
  setCurrentPage,
  setTotalUsersCount,
}) => {
  const onPageChanged = (page) => {
    setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`
      )
      .then((response) => {
        setUsers(response.data.items);
      });
  };

  useEffect(() => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then((response) => {
        setUsers(response.data.items);
        setTotalUsersCount(response.data.totalCount);
      });
  }, [setUsers]);

  return (
    <Users
      users={users}
      follow={follow}
      unfollow={unfollow}
      pageSize={pageSize}
      totalUsersCount={totalUsersCount}
      currentPage={currentPage}
      onPageChanged={onPageChanged}
    />
  );
};

export default connect (mapStateToProps, mapDispatchToProps) (UsersContainer)