const api = require('instagram-node').instagram();

const redirectURI = 'http://localhost:3000/handleAuth';

api.use({
  client_id: '52d1f7d9282a42f59e1c36f013acf974',
  client_secret: 'bc997656dd2f4149a70897cf67ef9464',
});

module.exports = {
  api,
  redirectURI,
};
