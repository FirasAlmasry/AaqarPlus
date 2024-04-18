import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
// slices
import { api } from '../state/apiUser';

// ----------------------------------------------------------------------

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
