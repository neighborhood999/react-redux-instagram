import { browserHistory } from 'react-router';

export const checkLocalStorageToken = () => {
  if (localStorage.getItem('token') === null) {
    browserHistory.replace({ pathname: '/instagramOAuth' });
  }
};

export const handleQueryCode = (code, instagramOAuth) => {
  if (code !== undefined && Object.keys(instagramOAuth).length !== 0) {
    localStorage.setItem('token', instagramOAuth.token);
    localStorage.setItem('userId', instagramOAuth.userId);
    localStorage.setItem('userName', instagramOAuth.userName);

    browserHistory.replace({ pathname: '/' });
  }
};

export const handleToken = (instagramOAuth, saveAccessToken) => {
  if (Object.keys(instagramOAuth).length === 0 && localStorage.getItem('token') !== null) {
    saveAccessToken(
      localStorage.getItem('token'),
      localStorage.getItem('userId'),
      localStorage.getItem('userName')
    );
  }
};
