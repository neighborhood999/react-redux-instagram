/* eslint no-console: 0 */
const apiConfig = require('./apiConfig');

function handleAuth(req, res) {
  return apiConfig.api.authorize_user(req.query.code, apiConfig.redirectURI, (err, result) => {
    if (err) {
      console.log(err.body);
      res.send('error');
    } else {
      console.log(`Access Token: ${result.access_token}`);
      res.cookie('authSuccess', result.access_token, { maxAge: 900000 });
      res.redirect('/');
    }
  });
}

module.exports = handleAuth;
