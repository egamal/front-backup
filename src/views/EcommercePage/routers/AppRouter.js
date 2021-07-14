import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";

import EcommercePage from '../EcommercePage'
import ProductListPage from '../ProductListPage'

const history = createBrowserHistory();

export default function AppRouter() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/product-list" component={ProductListPage} />
          <Route exact path="/" component={EcommercePage} />
        </Switch>
      </div>
    </Router>
  )
}
