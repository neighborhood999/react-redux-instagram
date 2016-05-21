/* eslint no-console:0 */
import fetchJSONP from 'fetch-jsonp';
import isomorphicFetch from 'isomorphic-fetch';

export const REQUEST_PROFILE = 'REQUEST_PROFILE';
export const RESPONSE_PROFILE = 'RESPONSE_PROFILEE';
export const FAILURE_REQUEST_PROFILE = 'FAILURE_REQUEST_PROFILE';
export const REQUEST_USER_PHOTOS = 'REQUEST_USER_PHOTOS';
export const RESPONSE_USER_PHOTOS = 'RESPONSE_USER_PHOTOS';
export const FAILURE_REQUEST_PHOTOS = 'FAILURE_REQUEST_PHOTOS';

const fetch = process.env.NODE_ENV === 'test' ? isomorphicFetch : fetchJSONP;

export function requestProfile() {
  return {
    type: REQUEST_PROFILE,
    isFetchingProfile: true,
    isProfileFetchDone: false,
  };
}

export function responseProfile(payload) {
  return {
    type: RESPONSE_PROFILE,
    isFetchingProfile: false,
    isProfileFetchDone: true,
    ProfileData: payload.data,
  };
}

export function failureRequestProfile(err) {
  return {
    type: FAILURE_REQUEST_PROFILE,
    isFetchingProfile: false,
    isProfileFetchDone: false,
    errorMessage: {
      profileInfo: err.message,
      recentMeida: '',
    },
  };
}

export function fetchUserProfile(token, userId) {
  const url = `https://api.instagram.com/v1/users/${userId}/?access_token=${token}`;

  return dispatch => {
    dispatch(requestProfile());
    return fetch(url)
      .then(response => response.json())
      .then(data => dispatch(responseProfile(data)))
      .catch(err => dispatch(failureRequestProfile(err)));
  };
}

export function requestUserPhotos() {
  return {
    type: REQUEST_USER_PHOTOS,
    isFetchingPhotos: true,
    isPhotosFetchDone: false,
  };
}

export function responseUserPhotos(payload) {
  return {
    type: RESPONSE_USER_PHOTOS,
    isFetchingPhotos: false,
    isPhotosFetchDone: true,
    UserPhotos: payload.data,
  };
}

export function failureRequestPhotos(err) {
  return {
    type: FAILURE_REQUEST_PHOTOS,
    isFetchingPhotos: false,
    isPhotosFetchDone: false,
    errorMessage: {
      profileInfo: '',
      recentMeida: err.message,
    },
  };
}

export function fetchUserPhotos(token, userId) {
  const url = `https://api.instagram.com/v1/users/${userId}/media/recent/?access_token=${token}`;

  return dispatch => {
    dispatch(requestUserPhotos());
    return fetch(url)
      .then(response => response.json())
      .then(data => dispatch(responseUserPhotos(data)))
      .catch(err => dispatch(failureRequestPhotos(err)));
  };
}
