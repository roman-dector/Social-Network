import * as types from './types';

const setIsAppInitialized = isAppInitialized => ({
  type: types.SET_IS_APP_INITIALIZED,
  isAppInitialized,
});

export { setIsAppInitialized };
