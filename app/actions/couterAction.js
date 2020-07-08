/* eslint-disable no-alert */
export const increment = () => dispatch => {
  alert('testing');
  dispatch({
    type: 'increase',
    payload: 23,
  });
};
