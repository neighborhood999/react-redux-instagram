/* eslint no-console:0 */
import fetchJSONP from 'fetch-jsonp';
import isomorphicFetch from 'isomorphic-fetch';

export const REQUEST_COMMENT_INFO = 'REQUEST_COMMENT_INFO';
export const RESPONSE_COMMENT_INFO = 'RESPONSE_COMMENT_INFO';

const fetch = process.env.NODE_ENV === 'test' ? isomorphicFetch : fetchJSONP;

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
  const url = `https://api.instagram.com/v1/media/${mediaId}/comments?access_token=${token}`;

  return (dispatch) => {
    dispatch(requestCommentInfo());
    return fetch(url)
      .then(response => response.json())
      .then(data => dispatch(responseCommentInfo(data, photoURL, likesCount, createTime, text)))
      .catch(err => console.log(err));
  };
}
