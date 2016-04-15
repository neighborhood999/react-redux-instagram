export const SAVE_ACCESSTOKEN = 'SAVE_ACCESSTOKEN';

export function saveAccessToken(token, userId, userName) {
  return {
    type: SAVE_ACCESSTOKEN,
    token,
    userId,
    userName,
  };
}
