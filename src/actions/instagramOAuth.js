export const SAVE_ACCESSTOKEN = 'SAVE_ACCESSTOKEN';

export const saveAccessToken = (token, userId, userName) => ({
  type: SAVE_ACCESSTOKEN,
  token,
  userId,
  userName,
});
