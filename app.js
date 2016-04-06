/* eslint no-console: 0 */

import express from 'express';
import cookieParser from 'cookie-parser';
import webpack from 'webpack';
import config from './webpack.config';
import handleAuth from './src/server/handleAuth';
import server from './src/server';

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
app.use(cookieParser());
app.use(handleAuth);
app.use(server);

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
});
