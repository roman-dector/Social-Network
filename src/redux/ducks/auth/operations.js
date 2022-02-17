import { authAPI } from '../../../dataAccess/api';

import * as actions from './actions';

const authMe = () => async dispatch => {
  let response = await authAPI.authMe();

  if (!response.data.resultCode) dispatch(actions.setIsUserAuthed(true));
  else dispatch(actions.setIsUserAuthed(false));
};

export { authMe };
