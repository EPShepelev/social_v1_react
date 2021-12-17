import { getAuthUser } from "./auth-reducer"

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
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

export const initnalizedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch) => {
  dispatch(getAuthUser()).then(()=>{dispatch(initnalizedSuccess())})
}



export default appReducer;
