import test from 'ava';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import * as commentActions from '../../src/actions/comment';

const mediaId = '1240822318939487290_291769334';
const token = '291769334.52d1f7d.7bfee59549ac40268c14255900e3a17d';
const photoURL = 'http://example.com/xx.png';
const likesCount = 9;
const createTime = '1460480018';
const text = 'message';
const from = {
  username: 'bivinity',
  profile_picture: 'http://example.com/pj.png',
  id: 123,
  full_name: 'pj',
};
const payload = {
  data: [
    {
      created_time: '1460480018',
      text: 'Hello',
      from,
      full_name: 'pj',
    },
  ],
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/* eslint no-unused-vars:0 */
test.afterEach(t => {
  nock.cleanAll();
});

test('requestCommentInfo should create request action', t => {
  const expectedAction = {
    type: commentActions.REQUEST_COMMENT_INFO,
    isFetchingComment: true,
    isCommentFetchDone: false,
  };

  t.deepEqual(commentActions.requestCommentInfo(), expectedAction);
});

test('fetchPhotoComment Async', t => {
  nock('http://localhost:3000')
    .get(`v1/media/${mediaId}/comments?access_token=${token}`)
    .reply(200, payload);

  const store = mockStore({ comment: {} });
  const expectedAction = [
    {
      type: commentActions.REQUEST_COMMENT_INFO,
      isFetchingComment: true,
      isCommentFetchDone: false,
    },
    {
      type: commentActions.RESPONSE_COMMENT_INFO,
      isFetchingComment: false,
      isCommentFetchDone: true,
      CommentData: payload.data,
      photoURL,
      likesCount,
      createTime,
      text,
    },
  ];

  return store.dispatch(
    commentActions.fetchPhotoComment(token, mediaId, photoURL, likesCount, createTime, text))
    .then(() => {
      t.is(store.getActions()[0].type, expectedAction[0].type);
      t.is(store.getActions()[1].type, expectedAction[1].type);
      t.is(
        store.getActions()[1].CommentData[0].from.username,
        expectedAction[1].CommentData[0].from.username
      );
    });
});

test('responseComment should create response action', t => {
  const expectedAction = {
    type: commentActions.RESPONSE_COMMENT_INFO,
    isFetchingComment: false,
    isCommentFetchDone: true,
    CommentData: payload.data,
    photoURL,
    likesCount,
    createTime,
    text,
  };

  t.deepEqual(
    commentActions.responseCommentInfo(
      payload, photoURL, likesCount, createTime, text
    ),
      expectedAction
    );
});
