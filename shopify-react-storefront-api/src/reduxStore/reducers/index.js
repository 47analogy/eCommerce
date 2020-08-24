import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import storeClientReducer from './storeClientReducer';

export default combineReducers({
  cart: cartReducer,
  storeClient: storeClientReducer,
});
