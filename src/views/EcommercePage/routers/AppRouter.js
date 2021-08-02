import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import EcommercePage from '../EcommercePage';
import ProductListPage from '../ProductListPage';
import { useDispatch } from 'react-redux';
import { startLoadingCategories } from '../actions/categories';

const history = createBrowserHistory();

export default function AppRouter() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(startLoadingCategories());
  }, [dispatch]);

  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path='/product-list' component={ProductListPage} />
          <Route exact path='/' component={EcommercePage} />
        </Switch>
      </div>
    </Router>
  );
}
