import {
  combineReducers,
  createStore
} from "redux";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";

const reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  friends: friendsReducer,
})

const store = createStore(reducers);

export default store;