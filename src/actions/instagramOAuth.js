export const GET_ACCESSTOKEN = 'GET_ACCESSTOKEN';

export function getAccessToken(token) {
  return {
    type: GET_ACCESSTOKEN,
    token,
  };
}
