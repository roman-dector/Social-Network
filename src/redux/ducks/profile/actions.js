import * as types from './types';

const setUserProfileInfo = userProfileInfo => ({
  type: types.SET_USER_PROFILE_INFO,
  userProfileInfo,
});

const setUserStatus = userStatus => ({
  type: types.SET_USER_STATUS,
  userStatus,
});

const toggleIsFetchingProfileInfo = isFetchingProfileInfo => ({
  type: types.TOGGLE_IS_FETCHING_PROFILE_INFO,
  isFetchingProfileInfo,
});

export { setUserProfileInfo, setUserStatus, toggleIsFetchingProfileInfo };
