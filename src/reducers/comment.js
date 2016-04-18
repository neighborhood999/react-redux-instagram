import {
  REQUEST_COMMENT_INFO,
  RESPONSE_COMMENT_INFO,
} from '../actions/comment';

const initalState = {
  isFetchingComment: false,
  isCommentFetchDone: false,
  CommentData: [],
  PhotoURL: '',
};

export default function comment(state = initalState, action) {
  switch (action.type) {
    case REQUEST_COMMENT_INFO:
      return Object.assign({}, state, {
        ...state,
        isFetchingComment: true,
        isCommentFetchDone: false,
      });
    case RESPONSE_COMMENT_INFO:
      return Object.assign({}, state, {
        ...state,
        isFetchingComment: false,
        isCommentFetchDone: true,
        CommentData: action.CommentData,
        PhotoURL: action.PhotoURL,
      });
    default:
      return state;
  }
}
