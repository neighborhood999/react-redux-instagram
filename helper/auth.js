const apiConfig = require('./apiConfig');

function auth(req, res) {
  return res.redirect(apiConfig.api.get_authorization_url(
    apiConfig.redirectURI, { scope: ['basic', 'follower_list', 'relationships', 'likes'],
  }));
}

module.exports = auth;
