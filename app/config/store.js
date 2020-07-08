import {AsyncStorage} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from '../reducers';

// Imports: Redux
// Middleware: Redux Persist Config

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // storage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['apiReducer', 'authReducer'],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ['counterReducer'],
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const allMiddlewares = [thunk, createLogger()];
// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(...allMiddlewares));
// Middleware: Redux Persist Persister
const persistor = persistStore(store);
// Exports
export {store, persistor};
