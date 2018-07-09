import { handleActions } from 'redux-actions';
import { userInfo } from '../actions';

const initialState = {
  pending: false,
  userInfo: {},
}

export default handleActions({
  [userInfo.GET_USER_INFO]: () => ({ pending: true }),
  [userInfo.GET_USER_INFO_SUCCESS]: (state, action) => ({
    userInfo: action.payload,
    pending: false,
  }),
  [userInfo.GET_USER_INFO_FAIL]: (state, action) => {
    console.error(action.payload);
    return {
      pending: false,
    };
  },
}, initialState);
