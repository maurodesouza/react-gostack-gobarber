import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/svgs/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(6)
    .required(),
});

export default function SignUp() {
  const dispatch = useDispatch();

  const onSubmit = ({ name, email, password }) => {
    dispatch(signUpRequest(name, email, password));
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={onSubmit}>
        <Input name="name" placeholder="Seu nome completo" />
        <Input name="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit"> Criar conta </button>
      </Form>
      <Link to="/">Já tenho uma conta</Link>
    </>
  );
}
