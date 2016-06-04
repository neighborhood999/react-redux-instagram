/* eslint no-console:0 */
import fetchJSONP from 'fetch-jsonp';
import isomorphicFetch from 'isomorphic-fetch';

export const REQUEST_COMMENT_INFO = 'REQUEST_COMMENT_INFO';
export const RESPONSE_COMMENT_INFO = 'RESPONSE_COMMENT_INFO';
export const FAILURE_REQUEST_COMMENT = 'FAILURE_REQUEST_COMMENT';

const fetch = process.env.NODE_ENV === 'test' ? isomorphicFetch : fetchJSONP;

export const requestCommentInfo = () => ({
  type: REQUEST_COMMENT_INFO,
  isFetchingComment: true,
  isCommentFetchDone: false,
});

export const responseCommentInfo = (payload, photoURL, likesCount, createTime, text) => ({
  type: RESPONSE_COMMENT_INFO,
  isFetchingComment: false,
  isCommentFetchDone: true,
  CommentData: payload.data,
  photoURL,
  likesCount,
  createTime,
  text,
});

export const failureRequestComment = (err) => ({
  type: FAILURE_REQUEST_COMMENT,
  isFetchingComment: false,
  isCommentFetchDone: false,
  errorMessage: err.message,
});

export const fetchPhotoComment = (token, mediaId, photoURL, likesCount, createTime, text) => {
  const url = `https://api.instagram.com/v1/media/${mediaId}/comments?access_token=${token}`;

  return (dispatch) => {
    dispatch(requestCommentInfo());
    return fetch(url)
      .then(response => response.json())
      .then(data => dispatch(responseCommentInfo(data, photoURL, likesCount, createTime, text)))
      .catch(err => dispatch(failureRequestComment(err)));
  };
};
