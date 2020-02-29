import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/svgs/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required(),
});

export default function SignIn() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  const onSubmit = ({ email, password }) =>
    dispatch(signInRequest(email, password));

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={onSubmit} autoComplete="off">
        <Input name="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">{loading ? 'Carregando ...' : 'Acessar'}</button>
      </Form>
      <Link to="/register">Criar uma conta</Link>
    </>
  );
}
