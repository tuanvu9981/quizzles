import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFoundPage } from '../pages/NotFound';
import { APP_ROUTES } from '../constants/routes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import Quiz from '../pages/Quiz';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {/* {APP_ROUTES.map(
        ({ path, exact = true, component: Component, isPrivate = false, ...rest }) => {
          if (!isPrivate) {
            return (
              <PublicRoute key={path} exact={exact} path={path} component={Component} {...rest} />
            );
          }
          return (
            <PrivateRoute key={path} exact={exact} path={path} component={Component} {...rest} />
          );
        }
      )} */}
      {/* component for not found page */}
      <Route path="*" element={<Quiz />} />      
    </Routes>
  </BrowserRouter>
);
