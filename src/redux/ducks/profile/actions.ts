import * as types from './types'

const setUserProfileInfo = (
  userProfileInfo: types.UserProfileInfoType
): types.SetUserProfileInfoActionType => ({
  type: types.SET_USER_PROFILE_INFO,
  userProfileInfo,
})

const setUserStatus = (userStatus: string): types.SetUserStatusActionType => ({
  type: types.SET_USER_STATUS,
  userStatus,
})

const setUserPhotos = (
  photos: types.PhotosType
): types.SetUserPhotosActionType => ({
  type: types.SET_USER_PHOTOS,
  photos,
})

const toggleIsFetchingProfileInfo = (
  isFetchingProfileInfo: boolean
): types.ToggleIsFetchingProfileInfoActionType => ({
  type: types.TOGGLE_IS_FETCHING_PROFILE_INFO,
  isFetchingProfileInfo,
})

const toggleIsFetchingProfileStatus = (
  isFetchingProfileStatus: boolean
): types.ToggleIsFetchingProfileStatusActionType => ({
  type: types.TOGGLE_IS_FETCHING_PROFILE_STATUS,
  isFetchingProfileStatus,
})

export {
  setUserProfileInfo,
  setUserStatus,
  setUserPhotos,
  toggleIsFetchingProfileInfo,
  toggleIsFetchingProfileStatus,
}
