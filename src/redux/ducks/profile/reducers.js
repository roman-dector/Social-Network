import { combineReducers } from '@reduxjs/toolkit';
import * as types from './types';

const initialState = {
  profileInfo: {},
  profilePosts: {},
};

const profileInfoReducer = (state = initialState.profileInfo, action) => {
  switch (action.type) {
    case types.SET_USER_PROFILE_INFO:
      return {};
    case types.SET_USER_STATUS:
      return {};
    case types.TOGGLE_IS_FETCHING_PROFILE_INFO:
      return {};
    default:
      return state;
  }
};

const profilePostsReducer = (state = initialState.profilePosts, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  profileInfo: profileInfoReducer,
  profilePosts: profilePostsReducer,
});
