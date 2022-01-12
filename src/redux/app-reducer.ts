import { getAuthUser } from "./auth-reducer"

const INITIALIZED_SUCCESS = "social-network/app/INITIALIZED_SUCCESS";

export type InitialStateType = {
  initialized: boolean
}

const initialState: InitialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: InitnalizedSuccessActionType): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

type InitnalizedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS;
}

export const initnalizedSuccess = ():InitnalizedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => async (dispatch: any) => {
  await dispatch(getAuthUser());
    dispatch(initnalizedSuccess());
}

export default appReducer;