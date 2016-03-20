const request = require('request');

function handleAuth(req, res) {
  const code = req.query.code;

  if (!code) {
    res.redirect('https://api.instagram.com/oauth/authorize/?client_id=52d1f7d9282a42f59e1c36f013acf974&redirect_uri=http://localhost:3000/handleAuth&response_type=code&scope=likes+comments+relationships');
    return;
  }

  const url = 'https://api.instagram.com/oauth/access_token';
  const form = {
    client_id: '52d1f7d9282a42f59e1c36f013acf974',
    client_secret: 'bc997656dd2f4149a70897cf67ef9464',
    grant_type: 'authorization_code',
    redirect_uri: 'http://localhost:3000/handleAuth',
    code,
  };
  request.post({ url, form }, (err, httpResponse, body) => {
    console.log(`${httpResponse} and body: ${body}`);
  });
  res.redirect('/');
}

module.exports = handleAuth;
