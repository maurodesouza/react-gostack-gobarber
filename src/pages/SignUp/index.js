import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/svgs/logo.svg';

export default function SignUp() {
  const onSubmit = data => {
    console.tron.log(data);
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form onSubmit={onSubmit}>
        <Input name="name" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit"> Criar conta </button>
      </Form>
      <Link to="/">Já tenho uma conta</Link>
    </>
  );
}
