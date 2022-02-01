import { AuthAPI, SecurityAPI } from "../api/api";

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "social-network/auth/GET_CAPTCHA_URL_SUCCESS";

const initialState = {
  userId: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type getCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  payload: { captchaUrl: string | null };
};

export const setCaptchaUrlSuccess = (
  captchaUrl: string
): getCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: {
    captchaUrl,
  },
});

type setAuthUserDataActionPayloadType = {
  userId: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
};

type setAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: setAuthUserDataActionPayloadType;
};

export const setAuthUserData = (
  userId: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean
): setAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: {
    userId,
    email,
    login,
    isAuth,
  },
});

export const getAuthUser = () => {
  return async (dispatch: any) => {
    const data = await AuthAPI.getAuthUserData();
    if (data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  };
};

export const login = (
  email: string | null,
  password: string | null,
  rememberMe: boolean,
  captcha: any
) => {
  return async (dispatch: any) => {
    const data = await AuthAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
      dispatch(getAuthUser());
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptchaUrl);
      }
      // const message =
      //   data.messages.length > 0 ? data.messages[0] : "Some error";
      // dispatch(stopSubmiting)
    }
  };
};

export const getCaptchaUrl = () => {
  return async (dispatch: any) => {
    const captchaUrl = await SecurityAPI.getCaptchaUrl().data.url;
    dispatch(setCaptchaUrlSuccess(captchaUrl));
  };
};

export const logout = () => {
  return async (dispatch: any) => {
    const data = await AuthAPI.logout();
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
};

export default authReducer;
