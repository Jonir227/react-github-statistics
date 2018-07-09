import axios from 'axios';
import * as Rx from 'rxjs';
import { map } from 'rxjs/operators';
import { githubUserInfoAPI } from '../../api';

// action type
export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAIL = 'GET_USER_INFO_FAIL';

// action creators
const getUserInfo = query => dispatch => {
  dispatch({
    type: GET_USER_INFO,
  });
  Rx.from(axios(`${githubUserInfoAPI}/${query}`))
    .pipe(
      map(result => result.data),
    )
    .subscribe(
      //next
      userData => dispatch({
        type: GET_USER_INFO_SUCCESS,
        payload: userData,
      }),
      err => dispatch({
        type: GET_USER_INFO_FAIL,
        payload: err,
      }),
    );
}

export {
  getUserInfo,
};
