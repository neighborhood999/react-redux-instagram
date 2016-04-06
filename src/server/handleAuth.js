import rP from 'request-promise';

/* eslint arrow-body-style: ["error", "always"] */
function requestPromise(code, cb) {
  const options = {
    method: 'POST',
    uri: 'https://api.instagram.com/oauth/access_token',
    form: {
      client_id: '52d1f7d9282a42f59e1c36f013acf974',
      client_secret: 'bc997656dd2f4149a70897cf67ef9464',
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000/',
      code,
    },
  };

  rP(options)
    .then((parsedBody) => {
      return JSON.parse(parsedBody);
    }).then((data) => {
      cb(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

/* eslint no-param-reassign: 0 */
function handleAuth(req, res, next) {
  const isCode = req.query.code;

  if (isCode) {
    requestPromise(isCode, (data) => {
      req.cookies.token = data.access_token;
      req.cookies.user = data.user;
      next();
    });
  } else {
    next();
  }
}

module.exports = handleAuth;
