import test from 'ava';
import reducer from '../../src/reducers/profile';
import * as profileActions from '../../src/actions/profile';

const initalState = {
  isFetchingProfile: false,
  isProfileFetchDone: false,
  isFetchingPhotos: false,
  isPhotosFetchDone: false,
  ProfileData: {},
  UserPhotos: [],
};

test('should handle initial state', t => {
  t.deepEqual(reducer(undefined, {}), initalState);
});

test('should handle REQUEST_PROFILE', t => {
  t.deepEqual(reducer(initalState, profileActions.requestProfile()), {
    isFetchingProfile: true,
    isProfileFetchDone: false,
    isFetchingPhotos: false,
    isPhotosFetchDone: false,
    ProfileData: {},
    UserPhotos: [],
  });
});


test('should handle RESPONSE_PROFILE', t => {
  const payload = {
    data: {
      username: 'bivinity',
      bio: 'test',
      website: 'http://example.com',
      profile_pictures: 'http://example.com/profile.png',
      counts: {
        media: 123,
        followed_by: 123,
        follows: 123,
      },
      full_name: 'PJ',
    },
  };

  t.deepEqual(reducer(initalState, profileActions.responseProfile(payload)), {
    isFetchingProfile: false,
    isProfileFetchDone: true,
    isFetchingPhotos: false,
    isPhotosFetchDone: false,
    ProfileData: payload.data,
    UserPhotos: [],
  });
});

test('should handle REQUEST_USER_PHOTOS', t => {
  t.deepEqual(reducer(initalState, profileActions.requestUserPhotos()), {
    isFetchingProfile: false,
    isProfileFetchDone: false,
    isFetchingPhotos: true,
    isPhotosFetchDone: false,
    ProfileData: {},
    UserPhotos: [],
  });
});


test('should handle RESPONSE_USER_PHOTOS', t => {
  const payload = {
    data: [
      { image1: 'http://example.com/image1.png' },
      { image2: 'http://example.com/image2.png' },
    ],
  };

  t.deepEqual(reducer(initalState, profileActions.responseUserPhotos(payload)), {
    isFetchingProfile: false,
    isProfileFetchDone: false,
    isFetchingPhotos: false,
    isPhotosFetchDone: true,
    ProfileData: {},
    UserPhotos: payload.data,
  });
});
