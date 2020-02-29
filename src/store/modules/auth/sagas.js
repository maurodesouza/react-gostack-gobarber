import { all, call, put, takeLatest } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';
import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const {
      data: { user, token },
    } = yield call(api.post, '/session', { email, password });

    if (!user.provider) return console.tron.error('Hmm ... Hellow ?');

    yield put(signInSuccess(token, user));

    return history.push('/dashboard');
  } catch (err) {
    return yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
