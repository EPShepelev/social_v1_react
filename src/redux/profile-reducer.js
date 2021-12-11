import { UsersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  postsData: [
    {
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      debugger;
      const post = action.post;
      return {
        ...state,
        postsData: [...state.postsData, { id: 7, likes: 0, post: post }],
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
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

export default profileReducer;
