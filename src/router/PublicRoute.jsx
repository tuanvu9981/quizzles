import React from 'react';
import { Route } from 'react-router-dom';

export const PublicRoute = ({ Component, restricted, ...rest }) => {
  // if (accessToken && restricted) {
  //   go to default page if user authenticated but this route is restricted
  // }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};
