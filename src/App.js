import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import '~/config/reactotronConfig';
import '~/config/yup';

import GlobalStyle from '~/styles/global';
import history from '~/services/history';
import Routes from '~/routes';

import store from '~/store';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}
