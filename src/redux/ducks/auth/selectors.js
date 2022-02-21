const selectIsUserAuthed = state => state.authState.auth.isUserAuthed;
const selectIsAuthenticating = state => state.authState.auth.isAuthenticating;

const selectCaptchaUrl = state => state.authState.captcha.captchaUrl;

const selectLoggedUserId = state => state.authState.loggedUser.id;

export { selectIsUserAuthed, selectIsAuthenticating, selectCaptchaUrl, selectLoggedUserId };
