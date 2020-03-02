import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import AvataInput from './AvatarInput';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';
import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(({ user }) => user.profile);

  const onSubmit = data => {
    dispatch(updateProfileRequest(data));
  };

  return (
    <Container>
      <Form initialData={profile} onSubmit={onSubmit}>
        <AvataInput name="avatar_id" />

        <Input name="name" placeholder="Seu nome completo" />
        <Input name="email" placeholder="Seu email" />
        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Sua nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="submit" onClick={() => dispatch(signOut())}>
        Sair do GoBarber
      </button>
    </Container>
  );
}
