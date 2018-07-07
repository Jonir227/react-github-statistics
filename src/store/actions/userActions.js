import axios from 'axios';
import * as Rx from 'rxjs';
import { map } from 'rxjs/operators';
import { githubUserAPI } from '../../api';

// action type
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';

// action Creators
const fetchUser = query => dispatch => {
  dispatch({
    type: FETCH_USER
  });
  Rx.from(axios(`${githubUserAPI}?q=${query}`))
    .pipe(
      map(result => result.data.items),
    )
    .subscribe(
      // next
      user => { dispatch({
      type: FETCH_USER_SUCCESS,
      payload: user,
      }) },
      // error
      err => { dispatch({
        type: FETCH_USER_FAIL,
        payload: err,
      }) },
    );
}

export {
  fetchUser,
};
