import { getProfile, getUserPhotos } from '../api/instagramAPI';

export const REQUEST_PROFILE = 'REQUEST_PROFILE';
export const RESPONSE_PROFILE = 'RESPONSE_PROFILEE';
export const REQUEST_USER_PHOTOS = 'REQUEST_USER_PHOTOS';
export const RESPONSE_USER_PHOTOS = 'RESPONSE_USER_PHOTOS';

function requestProfile() {
  return {
    type: REQUEST_PROFILE,
    isFetchingProfile: true,
    isProfileFetchDone: false,
  };
}

function responseProfile(payload) {
  return {
    type: RESPONSE_PROFILE,
    isFetchingProfile: false,
    isProfileFetchDone: true,
    ProfileData: payload.data,
  };
}

export function fetchUserProfile(token, userId) {
  return (dispatch) => {
    dispatch(requestProfile());
    getProfile(token, userId, (data) => {
      dispatch(responseProfile(data));
    });
  };
}

function requestUserPhotos() {
  return {
    type: REQUEST_USER_PHOTOS,
    isFetchingPhotos: true,
    isPhotosFetchDone: false,
  };
}

function responseUserPhotos(payload) {
  return {
    type: RESPONSE_USER_PHOTOS,
    isFetchingPhotos: false,
    isPhotosFetchDone: true,
    UserPhotos: payload.data,
  };
}

export function fetchUserPhotos(token, userId) {
  return (dispatch) => {
    dispatch(requestUserPhotos());
    getUserPhotos(token, userId, (data) => {
      dispatch(responseUserPhotos(data));
    });
  };
}
