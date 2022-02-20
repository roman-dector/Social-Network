const getIsUserAuthed = state => state.authState.auth.isUserAuthed;
const getIsAuthenticating = state => state.authState.auth.isAuthenticating;
const getCaptchaUrl = state => state.authState.captcha.captchaUrl;

export { getIsUserAuthed, getIsAuthenticating, getCaptchaUrl };
