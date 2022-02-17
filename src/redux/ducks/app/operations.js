import { authOperations } from '../auth';
import * as actions from './actions';

const initializeApp = () => dispatch => {
  Promise
    .all([dispatch(authOperations.authMe())])
    .then(() => dispatch(actions.setIsAppInitialized(true)))
};

export { initializeApp };
