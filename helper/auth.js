function auth(req, res) {
  res.redirect('https://api.instagram.com/oauth/authorize/?client_id=52d1f7d9282a42f59e1c36f013acf974&redirect_uri=http://localhost:3000/handleAuth&response_type=code&scope=likes+comments+relationships');
}

module.exports = auth;
