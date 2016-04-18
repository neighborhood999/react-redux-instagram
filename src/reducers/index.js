import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import instagramOAuth from './instagramOAuth';
import profile from './profile';
import comment from './comment';

const rootReducer = combineReducers({
  counter,
  instagramOAuth,
  profile,
  comment,
  routing,
});

export default rootReducer;
