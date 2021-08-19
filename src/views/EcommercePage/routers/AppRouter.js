import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import EcommercePage from '../EcommercePage';
import ProductListPage from '../ProductListPage';

const history = createBrowserHistory();

export default function AppRouter() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path={['/product-list', '/product-list/:categoryCode']} component={ProductListPage} />
          <Route exact path='/' component={EcommercePage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}
