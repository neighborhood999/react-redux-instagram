import { getPhotoCommentInfo } from '../api/instagramAPI';

export const REQUEST_COMMENT_INFO = 'REQUEST_COMMENT_INFO';
export const RESPONSE_COMMENT_INFO = 'RESPONSE_COMMENT_INFO';

function requestCommentInfo() {
  return {
    type: REQUEST_COMMENT_INFO,
    isFetchingComment: true,
    isCommentFetchDone: false,
  };
}

function responseCommentInfo(payload, photoURL) {
  return {
    type: RESPONSE_COMMENT_INFO,
    isFetchingComment: false,
    isCommentFetchDone: true,
    CommentData: payload.data,
    PhotoURL: photoURL,
  };
}

export function fetchPhotoComment(token, mediaId, photoURL) {
  return (dispatch) => {
    dispatch(requestCommentInfo());
    getPhotoCommentInfo(token, mediaId, (data) => {
      dispatch(responseCommentInfo(data, photoURL));
    });
  };
}
