//import { LOGIN } from "../config/store";

// Initial State
const initialState = {
  loggedIn: false,
  counter: 0,
  googleToken: [],
  data: [],
  loading: false,
  token: '',
  signUp: false,
};

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Loading':
      return {
        ...state,
        loading: true,
      };
    case 'clearLoading': {
      return {
        ...state,
        loading: false,
      };
    }
    case 'FbLogin': {
      return {
        ...state,
        loading: false,
        loggedIn: action.payload.success,
        token:
          action.payload.data[0].token_type +
          ' ' +
          action.payload.data[0].access_token,
      };
    }

    case 'googleLogin': {
      return {
        ...state,
        loading: false,
        loggedIn: action.payload.success,
        token:
          action.payload.data[0].token_type +
          ' ' +
          action.payload.data[0].access_token,
      };
    }
    case 'LOGIN': {
      return {
        ...state,
        email: action.trueFalse,
      };
    }
    case 'signUp': {
      return {
        ...state,
        loading: false,
        signUp: action.payload.success,
        token:
          action.payload.data[0].token_type +
          ' ' +
          action.payload.data[0].access_token,
      };
    }

    case 'SignIn': {
      console.log('signin:::', action.payload);
      return {
        ...state,
        loading: false,
        loggedIn: action.payload.success,
        token:
          action.payload.success &&
          action.payload.data[0].token_type +
            ' ' +
            action.payload.data[0].access_token,
      };
    }

    case 'Logout': {
      return {
        ...state,
        loggedIn: false,
        token: '',
      };
    }
    case 'clearSignup': {
      return {
        ...state,
        loading: false,
        signUp: false,
        data: [],
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
