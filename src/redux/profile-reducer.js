const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  postsData: [{
      id: 1,
      likes: 3,
      text: "post one"
    },
    {
      id: 2,
      likes: 7,
      text: "post two"
    },
    {
      id: 3,
      likes: 42,
      text: "post three"
    },
    {
      id: 4,
      likes: 11,
      text: "post four"
    },
    {
      id: 5,
      likes: 2,
      text: "someting strange"
    },
    {
      id: 6,
      likes: 42,
      text: "it works!"
    },
  ],
  newPostText: "",
  profile: null,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      return {...state, newPostText: action.newText }
    case ADD_POST:
      let text = state.newPostText;
      return {...state, newPostText: "", postsData: [...state.postsData, {id: 5, likes: 0, text: text}]}
    case SET_USER_PROFILE:
      return {...state, profile: action.profile }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({
  type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile: profile,
})

export default profileReducer

