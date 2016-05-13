import test from 'ava';
import reducer from '../../src/reducers/instagramOAuth';
import * as instagramOAuthActions from '../../src/actions/instagramOAuth';

const initalState = {
  token: '',
  userId: '',
  userName: '',
};

test('should handle inital state', t => {
  t.deepEqual(reducer(undefined, {}), initalState);
});

test('should handle SAVE_ACCESSTOKEN', t => {
  const token = 123;
  const userId = 456;
  const userName = 'PJ';

  t.deepEqual(
    reducer(initalState, instagramOAuthActions.saveAccessToken(token, userId, userName)), {
      token: 123,
      userId: 456,
      userName: 'PJ',
    });
});
