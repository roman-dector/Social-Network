import * as actions from './actions';
import { profileAPI } from '../../../dataAccess/api';

const getUserProfileInfo = userId => async dispatch => {
  let response = await profileAPI.getUserProfileInfo(userId);

  return dispatch(actions.setUserProfileInfo(response.data));
};

const getUserStatus = userId => async dispatch => {
  let response = await profileAPI.getUserStatus(userId);

  return dispatch(actions.setUserStatus(response.data));
};

export { getUserProfileInfo, getUserStatus };
