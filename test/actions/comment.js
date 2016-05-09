import test from 'ava';
import * as commentActions from '../../src/actions/comment';

test('requestCommentInfo should create request action', t => {
  const expectedAction = {
    type: commentActions.REQUEST_COMMENT_INFO,
    isFetchingComment: true,
    isCommentFetchDone: false,
  };

  t.deepEqual(commentActions.requestCommentInfo(), expectedAction);
});

test.skip('fetchPhotoComment Async', t => {
  // Async action fail test, need solve this problem.
  t.fail();
});

test('responseComment should create response action', t => {
  const photoURL = 'http://example.com/xx.png';
  const likesCount = 9;
  const createTime = '1460480018';
  const text = 'message';
  const from = {
    username: 'pj',
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
      payload, photoURL, likesCount, createTime, text),
      expectedAction
    );
});
