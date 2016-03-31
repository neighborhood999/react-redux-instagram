import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import instagramOAuth from './instagramOAuth';

const rootReducer = combineReducers({
  counter,
  instagramOAuth,
  routing,
});

export default rootReducer;
