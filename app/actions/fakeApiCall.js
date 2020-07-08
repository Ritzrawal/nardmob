/* eslint-disable no-alert */
import axios from 'axios';

export const getPosts = () => dispatch => {
  alert('called');
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      dispatch({
        type: 'ALL_POST',
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};
