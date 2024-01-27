import React, { FunctionComponent, useEffect } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuthContext } from '@terragotech/gen5-shared-components';
import { AppContainer } from './AppContainer/AppContainer';

const ProtectedRoute: FunctionComponent<RouteProps> = (props) => {
  const { token, ready, loadExistingAuth } = useAuthContext();

  useEffect(() => {
    if (!token) {
      loadExistingAuth();
    }
  }, [token, loadExistingAuth]);

  if (!ready) return null;
  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <AppContainer>
      <Route {...props} />
    </AppContainer>
  );
};

export default ProtectedRoute;
