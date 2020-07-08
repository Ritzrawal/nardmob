//import { LOGIN } from "../config/store";

// Initial State
const initialState = {
  SignUp: false,
  data: [],
  loadings: false,
};

// Reducers (Modifies The State And Returns A New State)
const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RLoading':
      return {
        ...state,
        loadings: true,
      };

    default: {
      return state;
    }
  }
};

export default signUpReducer;
