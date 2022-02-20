import { combineReducers } from '@reduxjs/toolkit';
import * as types from './types';
const initialState = {
  isUserAuthed: false,
  isAuthenticating: false,
};

const captchaState = {
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_IS_USER_AUTHED:
      return {
        ...state,
        isUserAuthed: action.isUserAuthed,
      };
    case types.SET_IS_AUTHENTICATING:
      return {
        ...state,
        isAuthenticating: action.isAuthenticating,
      };
    default:
      return state;
  }
};

const captchaReducer = (state = captchaState, action) => {
  switch (action.type) {
    case types.SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    case types.SET_CAPTCHA_TEXT:
      return {
        ...state,
        captchaText: action.captchaText,
      };
    default:
      return state;
  }
};

export default combineReducers({auth: authReducer, captcha: captchaReducer });
