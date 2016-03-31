const settings = 'scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no,width=452,height=633,top=5,left=457';
const instagramOAuthURL = 'https://api.instagram.com/oauth/authorize/?client_id=52d1f7d9282a42f59e1c36f013acf974&redirect_uri=http://localhost:3000/handleAuth&response_type=code';

export default function popup() {
  window.open(instagramOAuthURL, 'instagram', settings);
}
