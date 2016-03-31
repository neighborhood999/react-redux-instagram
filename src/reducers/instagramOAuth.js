import { GET_ACCESSTOKEN } from '../actions/instagramOAuth';

const initalState = {
  accessToken: null,
};

export default function instagramOAuth(state = initalState, action) {
  switch (action.type) {
    case GET_ACCESSTOKEN:
      return {
        ...state,
        accessToken: action.token,
      };
    default:
      return state;
  }
}
