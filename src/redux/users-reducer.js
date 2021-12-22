import { UsersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/helpers/storeObjectModifer"

const FOLLOW = "social-network/users/FOLLOW";
const UNFOLLOW = "social-network/usersUNFOLLOW";
const SET_USERS = "social-network/usersSET_USERS";
const SET_CURRENT_PAGE = "social-network/usersSET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "social-network/usersSET_TOTAL_USER_COUNT";
const TOGGLE_IS_FETCHING = "social-network/usersTOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "social-network/usersTOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
  users: [],
  pageSize: 30,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollingProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true}),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false}),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.page };
    case SET_TOTAL_USER_COUNT:
      return { ...state, totalUsersCount: action.count };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollingProgress: action.isFetching
          ? [...state.isFollingProgress, action.userId]
          : [state.isFollingProgress.filter((id) => id !== action.userId)],
      };
    default:
      return state;
  }
};

export const acceptFollow = (userId) => ({
  type: FOLLOW,
  userId: userId,
});
export const acceptUnfollow = (userId) => ({
  type: UNFOLLOW,
  userId: userId,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  page: page,
});
export const setTotalUsersCount = (count) => ({
  type: SET_TOTAL_USER_COUNT,
  count: count,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching,
});
export const toggleFollingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching: isFetching,
  userId: userId,
});

export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await UsersAPI.getUsers(currentPage, pageSize);
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
  };
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollingProgress(true, userId));
    const data = await apiMethod(userId);
      if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
      }
      dispatch(toggleFollingProgress(false, userId));
}

export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, UsersAPI.followUser.bind(UsersAPI), acceptFollow);
  };
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, UsersAPI.unfollowUser.bind(UsersAPI), acceptUnfollow);
  };
};

export default usersReducer;
