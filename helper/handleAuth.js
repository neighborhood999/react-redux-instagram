import rP from 'request-promise';

function requestPromise(code, cb) {
  const options = {
    method: 'POST',
    uri: 'https://api.instagram.com/oauth/access_token',
    form: {
      client_id: '52d1f7d9282a42f59e1c36f013acf974',
      client_secret: 'bc997656dd2f4149a70897cf67ef9464',
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000/handleAuth',
      code,
    },
  };
  rP(options)
    .then((parsedBody) => {
      cb(parsedBody);
    })
    .catch((err) => {
      console.log(err);
    });
}

/* eslint no-param-reassign: 0*/
function handleAuth(req, res) {
  const code = req.query.code;
  requestPromise(code, (data) => {
    console.log(data);
  });
}

module.exports = handleAuth;
