import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

export const PrivateRoute = ({ Component, ...rest }) => {
  useEffect(() => {
    // get accessToken
  }, []);

  // if (accessToken === '') {
  //   go to default route
  // }

  return <Route {...rest}>{Component}</Route>;
};
