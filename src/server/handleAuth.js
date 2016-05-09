/* eslint no-console:0 */
import rP from 'request-promise';
import config from '../../config/config.example';

function requestPromise(code, cb) {
  const options = {
    method: 'POST',
    uri: 'https://api.instagram.com/oauth/access_token',
    form: {
      client_id: config.clientID,
      client_secret: config.clientSecret,
      grant_type: 'authorization_code',
      redirect_uri: config.redirectURI,
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
export default function handleAuth(req, res, next) {
  const isCode = req.query.code;

  if (isCode) {
    requestPromise(isCode, (data) => {
      req.cookies.token = data.access_token;
      req.cookies.userId = data.user.id;
      req.cookies.userName = data.user.username;
      next();
    });
  } else {
    next();
  }
}
