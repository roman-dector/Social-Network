const selectUserProfileInfo = state =>
  state.profileState.profileInfo.userProfileInfo;
const selectUserProfileStatus = state =>
  state.profileState.profileInfo.userProfileStatus;

const selectIsFetchingProfileInfo = state =>
  state.profileState.profileInfo.isFetchingProfileInfo;
const selectIsFetchingProfileStatus = state =>
  state.profileState.profileInfo.isFetchingProfileStatus;

export {
  selectUserProfileInfo,
  selectUserProfileStatus,
  selectIsFetchingProfileInfo,
  selectIsFetchingProfileStatus,
};
