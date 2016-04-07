import { SAVE_ACCESSTOKEN } from '../actions/instagramOAuth';

const initalState = {
  token: '',
  userId: '',
};

export default function instagramOAuth(state = initalState, action) {
  switch (action.type) {
    case SAVE_ACCESSTOKEN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    default:
      return state;
  }
}
