import {
  UsersAPI,
  profileAPI
} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

const initialState = {
  postsData: [{
      id: 1,
      likes: 3,
      text: "post one",
    },
    {
      id: 2,
      likes: 7,
      text: "post two",
    },
    {
      id: 3,
      likes: 42,
      text: "post three",
    },
    {
      id: 4,
      likes: 11,
      text: "post four",
    },
    {
      id: 5,
      likes: 2,
      text: "someting strange",
    },
    {
      id: 6,
      likes: 42,
      text: "it works!",
    },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const post = action.post;
      return {
        ...state,
        postsData: [...state.postsData, {
          id: 7,
          likes: 0,
          post: post
        }],
      };
    case SET_USER_PROFILE:
      return {
        ...state, profile: action.profile
      };
    case SET_USER_STATUS:
      return {
        ...state, status: action.status
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (post) => ({
  type: ADD_POST,
  post: post,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile: profile,
});
export const setStatus = (status) => ({
  type: SET_USER_STATUS,
  status: status,
});

export const getProfile = (userId) => {
  return (dispatch) => {
    if (!userId) {
      userId = 21277;
    } //id моего профиля
    UsersAPI.getUserProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    if (!userId) {
      userId = 21277;
    } //id моего профиля
    profileAPI.getUserStatus(userId).then((data) => {
      dispatch(setStatus(data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateUserStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;