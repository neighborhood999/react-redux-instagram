export const GET_ACCESSTOKEN = 'GET_ACCESSTOKEN';

export function getAccessToken(token, user) {
  return {
    type: GET_ACCESSTOKEN,
    token,
    user,
  };
}
