import test from 'ava';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import * as profileActions from '../../src/actions/profile';

const userId = '291769334';
const token = '291769334.52d1f7d.7bfee59549ac40268c14255900e3a17d';
const payload = {
  data: {
    username: 'bivinity',
    bio: 'E.L.E \u2716\ufe0f',
    website: 'http://neighborhood999.github.io',
    profile_picture: 'http://example.com/profile.jpg',
    full_name: 'PJ',
    counts: {
      media: 307,
      followed_by: 280,
      follows: 203,
    },
    id: '291769334',
  },
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/* eslint no-unused-vars:0 */
test.afterEach(t => {
  nock.cleanAll();
});

test('requestProfile should create request action', t => {
  const expectedAction = {
    type: profileActions.REQUEST_PROFILE,
    isFetchingProfile: true,
    isProfileFetchDone: false,
  };

  t.deepEqual(profileActions.requestProfile(), expectedAction);
});

test('fetchUserProfile Async', t => {
  nock('http://localhost:3000')
    .get(`v1/users/${userId}/?access_token=${token}`)
    .reply(200, payload);

  const store = mockStore({ profile: {} });
  const expectedAction = [
    {
      type: profileActions.REQUEST_PROFILE,
      isFetchingProfile: true,
      isProfileFetchDone: false,
    },
    {
      type: profileActions.RESPONSE_PROFILE,
      isFetchingProfile: false,
      isProfileFetchDone: true,
      ProfileData: payload.data,
    },
  ];

  return store.dispatch(profileActions.fetchUserProfile(token, userId))
    .then(() => {
      t.is(store.getActions()[0].type, expectedAction[0].type);
      t.is(store.getActions()[1].type, expectedAction[1].type);
      t.is(store.getActions()[1].ProfileData.username, expectedAction[1].ProfileData.username);
    });
});

test('responseProfile should create response action', t => {
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

test('fetchUserPhotos Async', t => {
  nock('http://localhost:3000')
    .get(`v1/users/${userId}/?access_token=${token}`)
    .reply(200, payload);

  const store = mockStore({ profile: {} });
  const photos = {
    data: [
      {
        attribution: null,
        tags: [],
        location: null,
        comments: {
          counts: 7,
        },
        filter: 'Normal',
        created_time: '987654321',
        link: 'http://example.com/xx.png',
        likes: {
          count: 10,
        },
        images: {
          low_resolution: {
            url: 'http://examples.com/lowxx.png',
            width: 320,
            height: 320,
          },
          thumbnail: {
            url: 'http://examples.com/thumbnailxx.png',
            width: 150,
            height: 150,
          },
          standard_resolution: {
            url: 'http://examples.com/standardxx.png',
            width: 640,
            height: 640,
          },
        },
        users_in_photo: [],
        caption: {
          created_time: '1234567890',
          text: 'test',
          from: {
            username: 'pj',
            profile_picture: 'http://example.com/profile.png',
            id: 999999999,
            full_name: 'PJ',
          },
          id: '112233445566',
        },
        user_has_liked: false,
        id: '123456789',
        user: {
          username: 'bivinity',
          profile_picture: 'http://example.com/profile.png',
          id: 291769334,
          full_name: 'PJ',
        },
      },
    ],
  };
  const expectedAction = [
    {
      type: profileActions.REQUEST_USER_PHOTOS,
      isFetchingPhotos: true,
      isPhotosFetchDone: false,
    },
    {
      type: profileActions.RESPONSE_USER_PHOTOS,
      isFetchingPhotos: false,
      isPhotosFetchDone: true,
      UserPhotos: photos.data,
    },
  ];

  return store.dispatch(profileActions.fetchUserPhotos(token, userId))
    .then(() => {
      t.is(store.getActions()[0].type, expectedAction[0].type);
      t.is(store.getActions()[1].type, expectedAction[1].type);
      t.is(
        store.getActions()[1].UserPhotos[0].user.username,
        expectedAction[1].UserPhotos[0].user.username
      );
    });
});

test('responseUserPhotos should create response action', t => {
  const photos = {
    data: [
      { image1: 'http://example.com/image1.png' },
      { image2: 'http://example.com/image2.png' },
    ],
  };
  const expectedAction = {
    type: profileActions.RESPONSE_USER_PHOTOS,
    isFetchingPhotos: false,
    isPhotosFetchDone: true,
    UserPhotos: photos.data,
  };

  t.deepEqual(profileActions.responseUserPhotos(photos), expectedAction);
});
