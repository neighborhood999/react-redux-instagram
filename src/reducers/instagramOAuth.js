import { GET_ACCESSTOKEN } from '../actions/instagramOAuth';

const initalState = {
  token: '',
  user: '',
};

export default function instagramOAuth(state = initalState, action) {
  switch (action.type) {
    case GET_ACCESSTOKEN:
      return {
        ...state,
        token: action.token,
        user: action.user,
      };
    default:
      return state;
  }
}
