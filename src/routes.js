import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import * as containers from './containers';

const { Timeline, OAuth, CounterPage } = containers;

export default (
  <Route component={App}>
    <Route path="/" component={Timeline} />
    <Route path="/instagramOAuth" component={OAuth} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
