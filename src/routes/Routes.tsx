import { Phone } from 'pages/Phone/Phone';
import React from 'react';
import { Route, Router } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { history } from 'utils/singleHistory';
import { CallHandler } from './CallHandler';
import { NavHandler } from './NavHandler';
import { QueryRoute } from './QueryRouter/QueryRoute';

export const Routes = () => {
  return (
    <Router history={history}>
      <QueryParamProvider ReactRouterRoute={Route}>
        <NavHandler />
        <CallHandler />
        <QueryRoute path="phone" component={() => <Phone visible={true} />} />
      </QueryParamProvider>
    </Router>
  );
};
