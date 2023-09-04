import addReducer from "./addfav";
import addplaylist from "./addplaylist";
import addSongs from "./addSongs";
import { combineReducers } from "redux";
const rootReducer = combineReducers({ addReducer, addplaylist, addSongs });
export default rootReducer;
