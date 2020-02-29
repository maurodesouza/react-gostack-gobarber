import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/svgs/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input placeholder="Seu nome completo" />
        <input type="email" placeholder="Seu email" />
        <input type="password" placeholder="Sua senha" />
        <button type="submit"> Criar conta </button>
      </form>
      <Link to="/">Já tenho uma conta</Link>
    </>
  );
}
