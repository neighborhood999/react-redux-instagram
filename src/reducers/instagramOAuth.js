import { SAVE_ACCESSTOKEN } from '../actions/instagramOAuth';

const initalState = {
  token: '',
  userId: '',
  userName: '',
};

export default function instagramOAuth(state = initalState, action) {
  switch (action.type) {
    case SAVE_ACCESSTOKEN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        userName: action.userName,
      };
    default:
      return state;
  }
}
