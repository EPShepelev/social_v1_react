import { AuthAPI, SecurityAPI } from "../api/api";

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "social-network/auth/GET_CAPTCHA_URL_SUCCESS";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: {
    captchaUrl,
  },
});

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
      dispatch(setAuthUserData(id, email, login, true));
    }
  };
};

export const login = (email, password, rememberMe, captcha) => {
  return async (dispatch) => {
    const data = await AuthAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
      dispatch(getAuthUser());
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptchaUrl);
      }
      const message =
        data.messages.length > 0 ? data.messages[0] : "Some error";
      // dispatch(stopSubmiting)
    }
  };
};

export const getCaptchaUrl = () => {
  return async (dispatch) => {
    const captchaUrl = await SecurityAPI.getCaptchaUrl().data.url;
    // const response = await AuthAPI.getCaptchaUrl();
    // const captchaUrl = response.data.url;
    dispatch(setCaptchaUrlSuccess(captchaUrl));
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
