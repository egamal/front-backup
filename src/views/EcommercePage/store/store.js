import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import categoriesReducer from '../reducers/categoriesReducer';
import filtersReducer from '../reducers/filtersReducer';
import shoppingCartReducer from '../reducers/shoppingCartReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  categories: categoriesReducer,
  filters: filtersReducer,
  shoppingCart: shoppingCartReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
