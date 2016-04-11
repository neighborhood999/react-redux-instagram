import {
  REQUEST_PROFILE,
  RESPONSE_PROFILE,
  REQUEST_USER_PHOTOS,
  RESPONSE_USER_PHOTOS,
} from '../actions/profile';

const initalState = {
  isFetchingProfile: false,
  isProfileFetchDone: false,
  isFetchingPhotos: false,
  isPhotosFetchDone: false,
  ProfileData: {},
  UserPhotos: [],
};

export default function profile(state = initalState, action) {
  switch (action.type) {
    case REQUEST_PROFILE:
      return Object.assign({}, state, {
        ...state,
        isFetchingProfile: true,
      });
    case RESPONSE_PROFILE:
      return Object.assign({}, state, {
        ...state,
        isFetchingProfile: false,
        isProfileFetchDone: true,
        ProfileData: action.ProfileData,
      });
    case REQUEST_USER_PHOTOS:
      return Object.assign({}, state, {
        ...state,
        isFetchingPhotos: true,
        isPhotosFetchDone: false,
      });
    case RESPONSE_USER_PHOTOS:
      return Object.assign({}, state, {
        ...state,
        isFetchingPhotos: false,
        isPhotosFetchDone: true,
        UserPhotos: action.UserPhotos,
      });
    default:
      return state;
  }
}
