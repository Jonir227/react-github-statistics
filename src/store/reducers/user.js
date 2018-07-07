import { handleActions } from 'redux-actions';
import { user } from '../actions';

const initialState = {
  pending: false,
  user: [],
  searchCondition: false,
};

export default handleActions({
  [user.FETCH_USER]: () => ({ ...initialState, searchCondition: true, pending: true }),
  [user.FETCH_USER_SUCCESS]: (state, action) => ({
    user: action.payload,
    searchCondition: true,
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
