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
const mockPayload = {
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

test('fetchPhotoComment Async success', t => {
  nock('http://localhost:3000')
    .get(`v1/media/${mediaId}/comments?access_token=${token}`)
    .reply(200, mockPayload);

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
      CommentData: mockPayload.data,
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
    });
});

test('responseComment should create response action', t => {
  const expectedAction = {
    type: commentActions.RESPONSE_COMMENT_INFO,
    isFetchingComment: false,
    isCommentFetchDone: true,
    CommentData: mockPayload.data,
    photoURL,
    likesCount,
    createTime,
    text,
  };

  t.deepEqual(
    commentActions.responseCommentInfo(
      mockPayload, photoURL, likesCount, createTime, text
    ),
      expectedAction
    );
});

test('failureRequestComment should create failure action', t => {
  const mockErrMessage = { message: 'request comment failure.' };
  const expectedAction = {
    type: commentActions.FAILURE_REQUEST_COMMENT,
    isFetchingComment: false,
    isCommentFetchDone: false,
    errorMessage: 'request comment failure.',
  };

  t.deepEqual(commentActions.failureRequestComment(mockErrMessage), expectedAction);
});
