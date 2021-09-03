import { types } from '../types/types';

const initialState = {
  categories: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.setCategoriesFilter:
      return {
        ...state,
        categories: action.payload,
      };
    case types.addCategoryFilter:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload]: !state.categories[action.payload]
        }
      }
    case types.clearFilter:
      return initialState;
    default:
      return state;
  }
}
