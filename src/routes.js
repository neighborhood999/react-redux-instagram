import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import * as containers from './containers';
import Timeline from './components/Timeline';

const { CounterPage } = containers;

export default (
  <Route component={App}>
    <Route path="/" component={Timeline} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
