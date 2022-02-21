import { combineReducers } from '@reduxjs/toolkit';
import * as types from './types';

const profileInfoState = {
  isFetchingProfileInfo: false,
  isFetchingProfileStatus: false,
  userProfileInfo: {},
  userProfileStatus: '',
};

const profilePostsState = {};

const profileInfoReducer = (state = profileInfoState, action) => {
  switch (action.type) {
    case types.SET_USER_PROFILE_INFO:
      return {
        ...state,
        userProfileInfo: action.userProfileInfo,
      };
    case types.SET_USER_STATUS:
      return {
        ...state,
        userProfileStatus: action.userStatus,
      };
    case types.TOGGLE_IS_FETCHING_PROFILE_INFO:
      return {
        ...state,
        isFetchingProfileInfo: action.isFetchingProfileInfo,
      };
    case types.TOGGLE_IS_FETCHING_PROFILE_STATUS:
      return {
        ...state,
        isFetchingProfileStatus: action.isFetchingProfileStatus,
      };
    default:
      return state;
  }
};

const profilePostsReducer = (state = profilePostsState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  profileInfo: profileInfoReducer,
  profilePosts: profilePostsReducer,
});
