import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(({ user }) => user.profile);

  const onSubmit = () => {};

  return (
    <Container>
      <Form initialData={profile} onSubmit={onSubmit}>
        <Input name="name" placeholder="Seu nome completo" />
        <Input name="email" placeholder="Seu email" />
        <hr />
        <Input name="oldPassword" placeholder="Sua senha atual" />
        <Input name="password" placeholder="Sua nova senha" />
        <Input name="comfirmPassword" placeholder="Confirme sua senha" />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="submit">Sair do GoBarber</button>
    </Container>
  );
}
