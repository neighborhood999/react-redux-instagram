/* eslint no-console:0 */
import { getUserPhotos } from '../api/instagramAPI';
import fetchJSONP from 'fetch-jsonp';

export const REQUEST_PROFILE = 'REQUEST_PROFILE';
export const RESPONSE_PROFILE = 'RESPONSE_PROFILEE';
export const REQUEST_USER_PHOTOS = 'REQUEST_USER_PHOTOS';
export const RESPONSE_USER_PHOTOS = 'RESPONSE_USER_PHOTOS';

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

export function fetchUserProfile(token, userId) {
  const url = `https://api.instagram.com/v1/users/${userId}/?access_token=${token}`;

  // maybe we can direct return fetchJSONP in action
  return dispatch => {
    dispatch(requestProfile());
    return fetchJSONP(url)
      .then(response => response.json())
      .then(data => dispatch(responseProfile(data)))
      .catch(err => console.log(err));
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

export function fetchUserPhotos(token, userId) {
  return dispatch => {
    dispatch(requestUserPhotos());
    getUserPhotos(token, userId)
      .then(data => dispatch(responseUserPhotos(data)));
  };
}
