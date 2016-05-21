import test from 'ava';
import reducer from '../../src/reducers/comment';
import * as commentActions from '../../src/actions/comment';

const initalState = {
  isFetchingComment: false,
  isCommentFetchDone: false,
  CommentData: [],
  photoURL: '',
  likesCount: 0,
  createTime: 0,
  text: '',
  errorMessage: '',
};

test('should handle inital state', t => {
  t.deepEqual(reducer(undefined, {}), initalState);
});

test('shounld handle REQUEST_COMMENT_INFO', t => {
  t.deepEqual(reducer(initalState, commentActions.requestCommentInfo()), {
    isFetchingComment: true,
    isCommentFetchDone: false,
    CommentData: [],
    photoURL: '',
    likesCount: 0,
    createTime: 0,
    text: '',
    errorMessage: '',
  });
});

test('should handle RESPONSE_COMMENT_INFO', t => {
  const payload = {
    data: [
      { message1: 'Hello' },
      { message2: 'World' },
    ],
  };
  const photoURL = 'http://example.com/xx.png';
  const likesCount = 99;
  const createTime = '1460480018';
  const text = 'test message';

  t.deepEqual(reducer(initalState,
    commentActions.responseCommentInfo(payload, photoURL, likesCount, createTime, text)), {
      isFetchingComment: false,
      isCommentFetchDone: true,
      CommentData: payload.data,
      photoURL: 'http://example.com/xx.png',
      likesCount: 99,
      createTime: '1460480018',
      text: 'test message',
      errorMessage: '',
    });
});

test('should handle FAILURE_REQUEST_COMMENT', t => {
  const mockErrMessage = { message: 'failure request comment.' };

  t.deepEqual(reducer(initalState, commentActions.failureRequestComment(mockErrMessage)), {
    isFetchingComment: false,
    isCommentFetchDone: false,
    CommentData: [],
    photoURL: '',
    likesCount: 0,
    createTime: 0,
    text: '',
    errorMessage: mockErrMessage.message,
  });
});
