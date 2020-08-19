import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/cartReducer';
export default createStore(reducer, applyMiddleware(thunk));
