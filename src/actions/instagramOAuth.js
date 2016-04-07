export const SAVE_ACCESSTOKEN = 'SAVE_ACCESSTOKEN';

export function saveAccessToken(token, userId) {
  return {
    type: SAVE_ACCESSTOKEN,
    token,
    userId,
  };
}
