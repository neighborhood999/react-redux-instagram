import { getPhotoCommentInfo } from '../api/instagramAPI';

export const REQUEST_COMMENT_INFO = 'REQUEST_COMMENT_INFO';
export const RESPONSE_COMMENT_INFO = 'RESPONSE_COMMENT_INFO';

export function requestCommentInfo() {
  return {
    type: REQUEST_COMMENT_INFO,
    isFetchingComment: true,
    isCommentFetchDone: false,
  };
}

export function responseCommentInfo(payload, photoURL, likesCount, createTime, text) {
  return {
    type: RESPONSE_COMMENT_INFO,
    isFetchingComment: false,
    isCommentFetchDone: true,
    CommentData: payload.data,
    photoURL,
    likesCount,
    createTime,
    text,
  };
}

export function fetchPhotoComment(token, mediaId, photoURL, likesCount, createTime, text) {
  return (dispatch) => {
    dispatch(requestCommentInfo());
    getPhotoCommentInfo(token, mediaId)
      .then(data => dispatch(responseCommentInfo(data, photoURL, likesCount, createTime, text)));
  };
}
