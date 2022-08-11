import { combineReducers } from "redux";

import {posts, postId} from './posts'
import authReducer from "./auth";
export default combineReducers({ posts, postId, authReducer })