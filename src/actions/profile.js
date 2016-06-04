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

export const requestProfile = () => ({
  type: REQUEST_PROFILE,
  isFetchingProfile: true,
  isProfileFetchDone: false,
});

export const responseProfile = (payload) => ({
  type: RESPONSE_PROFILE,
  isFetchingProfile: false,
  isProfileFetchDone: true,
  ProfileData: payload.data,
});

export const failureRequestProfile = (err) => ({
  type: FAILURE_REQUEST_PROFILE,
  isFetchingProfile: false,
  isProfileFetchDone: false,
  errorMessage: {
    profileInfo: err.message,
    recentMeida: '',
  },
});

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

export const requestUserPhotos = () => ({
  type: REQUEST_USER_PHOTOS,
  isFetchingPhotos: true,
  isPhotosFetchDone: false,
});

export const responseUserPhotos = (payload) => ({
  type: RESPONSE_USER_PHOTOS,
  isFetchingPhotos: false,
  isPhotosFetchDone: true,
  UserPhotos: payload.data,
});

export const failureRequestPhotos = (err) => ({
  type: FAILURE_REQUEST_PHOTOS,
  isFetchingPhotos: false,
  isPhotosFetchDone: false,
  errorMessage: {
    profileInfo: '',
    recentMeida: err.message,
  },
});

export const fetchUserPhotos = (token, userId) => {
  const url = `https://api.instagram.com/v1/users/${userId}/media/recent/?access_token=${token}`;

  return dispatch => {
    dispatch(requestUserPhotos());
    return fetch(url)
      .then(response => response.json())
      .then(data => dispatch(responseUserPhotos(data)))
      .catch(err => dispatch(failureRequestPhotos(err)));
  };
};
