/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const authUser = require('./Auth/auth');
const handleAuth = require('./Auth/handleAuth');

const app = express();

app.use(cookieParser());
app.use('/authUser', authUser);
app.use('/handleAuth', handleAuth);

app.get('*', (req, res) => {
  const accssToke = req.cookies.authSuccess;
  if (!accssToke) {
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
