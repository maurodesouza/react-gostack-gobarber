import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import '~/config/reactotronConfig';
import '~/config/yup';

import GlobalStyle from '~/styles/global';
import history from '~/services/history';
import Routes from '~/routes';

import { store, persistor } from '~/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer
            autoClose={4500}
            pauseOnHover={false}
            toastClassName="toast"
          />
        </Router>
      </PersistGate>
    </Provider>
  );
}
