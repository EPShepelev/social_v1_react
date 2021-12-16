import { AuthAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {
    userId,
    email,
    login,
    isAuth,
  },
});

export const getAuthUser = () => {
  return (dispatch) => {
    AuthAPI.getAuthUserData().then((data) => {
      if (data.resultCode === 0) {
        const { userId, email, login } = data.data;
        dispatch(setAuthUserData(userId, email, login, true));
      }
    });
  };
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    AuthAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
       dispatch(getAuthUser());
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    AuthAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
