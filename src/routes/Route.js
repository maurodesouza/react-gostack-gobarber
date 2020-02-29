import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

import authLayout from '~/pages/_Layouts/auth';
import defaultLayout from '~/pages/_Layouts/default';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) return <Redirect to="/" />;

  if (signed && !isPrivate) return <Redirect to="/dashboard" />;

  const Layout = isPrivate ? defaultLayout : authLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
