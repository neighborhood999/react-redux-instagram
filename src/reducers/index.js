import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import instagramOAuth from './instagramOAuth';
import profile from './profile';

const rootReducer = combineReducers({
  counter,
  instagramOAuth,
  profile,
  routing,
});

export default rootReducer;
