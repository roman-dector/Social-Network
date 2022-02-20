import { authAPI, securityAPI } from '../../../dataAccess/api';
import { WrongCredentialsError, WrongCaptchaError } from '../../../dataAccess/apiErrors';

import * as actions from './actions';

const authMe = () => async dispatch => {
  let response = await authAPI.authMe();

  if (!response.data.resultCode) dispatch(actions.setIsUserAuthed(true));
  else dispatch(actions.setIsUserAuthed(false));
};

const login =
  ({ email, password, rememberMe = false, captcha = null }) =>
  async dispatch => {
    let response = await authAPI.login({
      email,
      password,
      rememberMe,
      captcha,
    });
    let resCode = response.data.resultCode;
    if (!resCode) return dispatch(authMe());
    else if (resCode === 10) {
      let captchaResponse = await securityAPI.getCaptchaUrl();
      let captchaUrl = captchaResponse.data.url;
      debugger;
      dispatch(actions.setCaptchaUrl(captchaUrl))
      throw new WrongCaptchaError(response.data.messages)
    } else throw new WrongCredentialsError(response.data.messages[0]);
  };

const logout = () => async dispatch => {
  let response = await authAPI.logout();
  if (!response.data.resultCode) return dispatch(authMe());
};

export { authMe, login, logout };
