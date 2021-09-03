import { types } from '../types/types';

export function filterCategories(categoriesFilter) {
  return (dispatch, getState) => {
    const { categories } = getState().filters;
    if (
      JSON.stringify(categories) === JSON.stringify({}) &&
      JSON.stringify(categories) !== JSON.stringify(categoriesFilter)
    ) {
      dispatch({
        type: types.setCategoriesFilter,
        payload: categoriesFilter,
      });
    }
  };
}

export function filterCategory(categoryCode) {
  return {
    type: types.addCategoryFilter,
    payload: categoryCode,
  };
}

export function clearFilter(){
  return {
    type: types.clearFilter,
  }
}
