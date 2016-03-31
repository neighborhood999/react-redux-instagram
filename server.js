/* eslint no-console: 0 */

require('babel-register');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const init = require('./helper/init');
const port = process.env.PORT || 3000;

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(init);

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);
});
