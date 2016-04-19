import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import instagramOAuth from './instagramOAuth';
import profile from './profile';
import comment from './comment';

const rootReducer = combineReducers({
  instagramOAuth,
  profile,
  comment,
  routing,
});

export default rootReducer;
