// Imports: Dependencies
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import {backgroundReducer} from './backgroundReducer';
import apiReducer from './apiReducer';
import BIllsReducer from './BIllsReducer';
import signUpReducer from './signUpReducer';
// Imports: Reducers

// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer: authReducer,
  backgroundReducer,
  apiReducer: apiReducer,
  BIllsReducer: BIllsReducer,
  signUpReducer: signUpReducer,
});
// Exports
export default rootReducer;
