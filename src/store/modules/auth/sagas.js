import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { signInSuccess, signFailure } from './actions';
import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const {
      data: { user, token },
    } = yield call(api.post, '/session', { email, password });

    if (!user.provider) {
      toast.warn('GoBarber web é só para prestadores de serviços !');
      return yield put(signFailure());
    }

    yield put(signInSuccess(token, user));

    return history.push('/dashboard');
  } catch (err) {
    toast.warn('Algo deu errado - Verifique seus dados !');
    return yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  const { name, email, password } = payload;

  try {
    yield call(api.post, '/users', {
      name,
      email,
      password,
      provider: true,
    });

    return history.push('/');
  } catch (err) {
    toast.warn('Houve um erro no seu cadastro !');
    return put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
