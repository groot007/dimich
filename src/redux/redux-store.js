import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer
})

const store = createStore(reducers);

export default store;