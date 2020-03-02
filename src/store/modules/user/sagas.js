import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { updateProfileFailure, updateProfileSuccess } from './actions';
import api from '~/services/api';
import history from '~/services/history';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const { data } = yield call(api.put, '/users', profile);

    toast.success('Perfil atualizado com sucesso !', {
      autoClose: 2000,
    });

    yield put(updateProfileSuccess(data));

    history.push('/dashboard');
    history.push('/profile');
  } catch (err) {
    yield put(updateProfileFailure());
    toast.success('Falha na atualização do perfil !');
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
