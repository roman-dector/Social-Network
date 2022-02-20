import * as types from './types';

const setIsUserAuthed = isUserAuthed => ({
  type: types.SET_IS_USER_AUTHED,
  isUserAuthed,
});

const setIsAuthenticating = isAuthenticating => ({
  type: types.SET_IS_AUTHENTICATING,
  isAuthenticating,
});

const setCaptchaUrl = captchaUrl => ({
  type: types.SET_CAPTCHA_URL,
  captchaUrl,
});

const setCaptchaText = captchaText => ({
  type: types.SET_CAPTCHA_TEXT,
  captchaText,
});

export { setIsUserAuthed, setIsAuthenticating, setCaptchaUrl, setCaptchaText };
