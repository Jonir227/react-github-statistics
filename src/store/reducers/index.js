import { combineReducers } from 'redux';
import user from './user';
import userInfo from './userInfo';

export default combineReducers({
  user,
  userInfo,
});

