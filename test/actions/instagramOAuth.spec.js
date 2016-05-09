import test from 'ava';
import * as instagramOAuthActions from '../../src/actions/instagramOAuth';

test('saveAccessToken should create save accesstoken action', t => {
  const expectedAction = {
    type: instagramOAuthActions.SAVE_ACCESSTOKEN,
    token: 123,
    userId: 456,
    userName: 'PJ',
  };

  t.deepEqual(instagramOAuthActions.saveAccessToken(123, 456, 'PJ'), expectedAction);
});
