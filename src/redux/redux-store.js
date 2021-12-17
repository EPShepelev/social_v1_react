import { applyMiddleware, combineReducers, createStore } from "redux";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  friends: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
