import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import EcommercePage from '../EcommercePage';
import ProductListPage from '../ProductListPage';
import ShoppingCartPage from '../ShoppingCartPage';

const history = createBrowserHistory();

export default function AppRouter() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path={'/product-list'} component={ProductListPage} />
          <Route exact path={'/shopping-cart'} component={ShoppingCartPage} />
          <Route exact path='/' component={EcommercePage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}
