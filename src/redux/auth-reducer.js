import { AuthAPI } from "../api/api";

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";

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
  return async (dispatch) => {
    const data = await AuthAPI.getAuthUserData();
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        console.log(data);
        dispatch(setAuthUserData(id, email, login, true));
      }
  };
};

export const login = (email, password, rememberMe) => {
  return async (dispatch) => {
    const data = await AuthAPI.login(email, password, rememberMe);
      if (data.resultCode === 0) {
       dispatch(getAuthUser());
      }
  };
};

export const logout = () => {
  return async (dispatch) => {
    const data = await AuthAPI.logout();
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
  };
};

export default authReducer;
