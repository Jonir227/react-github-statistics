import { handleActions } from 'redux-actions';
import { user } from '../actions';

const initialState = {
  pending: false,
  user: [],
};

export default handleActions({
  [user.FETCH_USER]: () => ({ ...initialState, pending: true }),
  [user.FETCH_USER_SUCCESS]: (state, action) => ({
    user: action.payload,
    pending: false,
  }),
  [user.FETCH_USER_FAIL]: (state, action) => {
    console.error(action.payload);
    return {
      ...initialState,
      pending: false,
    };
  },
}, initialState);
