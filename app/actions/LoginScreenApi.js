/* eslint-disable no-alert */
import axios from 'axios';
const baseUrl = 'http://narad.meroshows.com/api/';
export const postGoogleLogin = (
  auth_provider,
  profile_id,
  full_name,
  profile_photo,
  email,
) => dispatch => {
  console.log('google log:::' + profile_id + ' ' + full_name);
  axios
    .post(baseUrl + 'auth/google', {
      auth_provider: auth_provider,
      profile_id: profile_id,
      full_name: full_name,
      profile_photo: profile_photo,
      email: email,
    })
    .then(res => {
      dispatch({
        type: 'googleLogin',
        payload: res.data,
      });
    })
    .catch(err => alert('Problem ' + err));
};

export const postSignin = (value1, value2) => dispatch => {
  dispatch({
    type: 'Loading',
  });

  axios
    .post('http://narad.meroshows.com/api/sign-in', {
      email: value1,
      password: value2,
    })
    .then(res => {
      dispatch({
        type: 'SignIn',
        payload: res.data,
      });
    })
    .catch(() =>
      dispatch({
        type: 'SignIn',
        payload: [],
      }),
    );
};

export const postFacebookSignin = value1 => dispatch => {
  dispatch({
    type: 'Loading',
  });

  axios
    .post('http://narad.meroshows.com/api/auth/facebook', {
      access_token: value1,
    })
    .then(res => {
      console.log('fbresponse', res);
      dispatch({
        type: 'FbLogin',
        payload: res.data,
      });
    })
    .catch(() =>
      dispatch({
        type: 'FbLogin',
        payload: false,
      }),
    );
};

export const postTwitterSignin = (value1, value2) => dispatch => {
  dispatch({
    type: 'Loading',
  });
  console.log('twitter outh ' + value1 + '   screat  ' + value2);
  axios
    .post(baseUrl + 'auth/twitter', {
      oauth_token: value1,
      oauth_token_secret: value2,
    })
    .then(res => {
      console.log('twtterresponse', res);
      dispatch({
        type: 'FbLogin',
        payload: res.data,
      });
    })
    .catch(() =>
      dispatch({
        type: 'FbLogin',
        payload: false,
      }),
    );
};

export const Logout = () => dispatch => {
  dispatch({
    type: 'Logout',
  });

  // axios
  //   .post(baseUrl + 'auth/twitter', {
  //     oauth_token: value1,
  //     oauth_token_secret: value2,
  //   })
  //   .then(res => {
  //     console.log('fbresponse', res);
  //     dispatch({
  //       type: 'FbLogin',
  //       payload: res.data.success,
  //     });
  //   })
  //   .catch(err =>
  //     dispatch({
  //       type: 'FbLogin',
  //       payload: false,
  //     }),
  //   );
};

export const clearSignUp = () => dispatch => {
  dispatch({
    type: 'clearSignup',
  });
};

export const loadingClear = () => dispatch => {
  dispatch({
    type: 'clearLoading',
  });
};

export const postSign = (name, email, password) => dispatch => {
  dispatch({
    type: 'Loading',
  });

  axios
    .post(baseUrl + 'sign-up', {
      full_name: name,
      email: email,
      password: password,
    })
    .then(res => {
      console.log('signupres', res);
      dispatch({
        type: 'signUp',
        payload: res.data,
      });
    })
    .catch(() =>
      dispatch({
        type: 'signUp',
        payload: [],
      }),
    );
};
