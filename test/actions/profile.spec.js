import test from 'ava';
import * as profileActions from '../../src/actions/profile';

test('requestProfile should create request action', t => {
  const expectedAction = {
    type: profileActions.REQUEST_PROFILE,
    isFetchingProfile: true,
    isProfileFetchDone: false,
  };

  t.deepEqual(profileActions.requestProfile(), expectedAction);
});

test.skip('fetchUserProfile Async', t => {
  // Async action fail test, need solve this problem.
  t.fail();
});

test('responseProfile should create response action', t => {
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
  const expectedAction = {
    type: profileActions.RESPONSE_PROFILE,
    isFetchingProfile: false,
    isProfileFetchDone: true,
    ProfileData: payload.data,
  };

  t.deepEqual(profileActions.responseProfile(payload), expectedAction);
});

test('requestUserPhotos should create request action', t => {
  const expectedAction = {
    type: profileActions.REQUEST_USER_PHOTOS,
    isFetchingPhotos: true,
    isPhotosFetchDone: false,
  };

  t.deepEqual(profileActions.requestUserPhotos(), expectedAction);
});

test.skip('fetchUserPhotos Async', t => {
  // Async action fail test, need solve this problem.
  t.fail();
});

test('responseUserPhotos should create response action', t => {
  const payload = {
    data: [
      { image1: 'http://example.com/image1.png' },
      { image2: 'http://example.com/image2.png' },
    ],
  };
  const expectedAction = {
    type: profileActions.RESPONSE_USER_PHOTOS,
    isFetchingPhotos: false,
    isPhotosFetchDone: true,
    UserPhotos: payload.data,
  };

  t.deepEqual(profileActions.responseUserPhotos(payload), expectedAction);
});
