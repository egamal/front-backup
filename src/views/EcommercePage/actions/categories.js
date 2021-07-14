import { getCategories } from '../helpers/getCategories';
import { types } from '../types/types';

export function startLoadingCategories() {
  return async (dispatch, getState) => {
    const state = getState().categories
    if(state.length === 0){
      const categories = await getCategories();
      dispatch(loadCategories(categories));
    }
  };
}

export function loadCategories(categories) {
  return {
    type: types.categoriesLoad,
    payload: categories,
  };
}
