import {
  UsersAPI,
  profileAPI
} from "../api/api";

const ADD_POST = "social-network/profile/ADD-POST";
const SET_USER_PROFILE = "social-network/profile/SET_USER_PROFILE";
const SET_USER_STATUS = "social-network/profile/SET_USER_STATUS";
const DELETE_POST = "social-network/profile/DELETE_POST";

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
          text: post
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
      case DELETE_POST:
      return {
        ...state, postsData: state.postsData.filter(item => item.id !== action.postId)
      }
    default:
      return state;
  }
};

export const addPostActionCreator = (post) => ({
  type: ADD_POST,
  post: post,
});
export const deletePostActionCreator = (postId) => ({
  type: DELETE_POST,
  postId: postId,
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
    UsersAPI.getUserProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
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