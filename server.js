/* eslint no-console: 0 */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const cookieParser = require('cookie-parser');
const config = require('./webpack.config');
const authUser = require('./Auth/auth');
const handleAuth = require('./Auth/handleAuth');
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
app.use('/authUser', authUser);
app.use('/handleAuth', handleAuth);

app.get('*', (req, res) => {
  const accssToken = req.cookies.authSuccess;

  if (!accssToken) {
    res.redirect('/authUser');
    return;
  }

  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);
});
