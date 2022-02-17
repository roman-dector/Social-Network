import * as types from './types';

const initialState = {
  isAppInitialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_IS_APP_INITIALIZED:
      return {
        ...state,
        isAppInitialized: action.isAppInitialized
      }
    default:
      return state;
  }
};

export default appReducer;
