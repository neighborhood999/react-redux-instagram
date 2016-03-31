import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../src/routes';
import configureStore from '../src/store/configureStore';
import renderPage from './renderPage';

function init(req, res) {
  const initalState = {
    counter: 1,
    instagramOAuth: 123456,
  };
  const store = configureStore(initalState);

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const html = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );
      const finalState = store.getState();

      res.send(renderPage(html, finalState));
    } else {
      res.status(404).send('Not found');
    }
  });
}

module.exports = init;
