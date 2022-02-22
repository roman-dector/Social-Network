import * as types from './types';

const setUserProfileInfo = userProfileInfo => ({
  type: types.SET_USER_PROFILE_INFO,
  userProfileInfo,
});

const setUserStatus = userStatus => ({
  type: types.SET_USER_STATUS,
  userStatus,
});

const setUserPhotos = photos => ({
  type: types.SET_USER_PHOTOS,
  photos,
});

const toggleIsFetchingProfileInfo = isFetchingProfileInfo => ({
  type: types.TOGGLE_IS_FETCHING_PROFILE_INFO,
  isFetchingProfileInfo,
});

const toggleIsFetchingProfileStatus = isFetchingProfileStatus => ({
  type: types.TOGGLE_IS_FETCHING_PROFILE_STATUS,
  isFetchingProfileStatus,
});

export {
  setUserProfileInfo,
  setUserStatus,
  setUserPhotos,
  toggleIsFetchingProfileInfo,
  toggleIsFetchingProfileStatus,
};
