import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import * as containers from './containers';

const { Home, OAuth, Profile, CounterPage } = containers;

export default (
  <Route component={App} >
    <Route path="/" component={Home} />
    <Route path="/instagramOAuth" component={OAuth} />
    <Route path="/profile" component={Profile} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
