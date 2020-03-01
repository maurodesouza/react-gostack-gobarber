import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/svgs/logo-purple.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard"> Dashboard </Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong> Mauro de Souza </strong>
              <Link to="/profile"> Meu perfil </Link>
            </div>
            <img
              src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
              alt="Mauro de Souza"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
