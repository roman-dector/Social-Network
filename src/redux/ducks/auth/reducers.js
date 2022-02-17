import * as types from './types';
const initialState = {
  isUserAuthed: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_IS_USER_AUTHED:
      return {
        ...state,
        isUserAuthed: action.isUserAuthed,
      };
    default:
      return state;
  }
};

export default authReducer;
