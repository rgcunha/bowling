import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import bowling from './bowling';

export default combineReducers({
  routing: routerReducer,
  bowling
});
