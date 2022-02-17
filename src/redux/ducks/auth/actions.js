import * as types from './types';

const setIsUserAuthed = isUserAuthed => ({
  type: types.SET_IS_USER_AUTHED,
  isUserAuthed,
});

export { setIsUserAuthed };
