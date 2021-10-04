import { types } from '../types/types';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.addProductToCart:
      for (const e in state) {
        if (e === Object.keys(action.payload)[0]) {
          action.payload[e].quantity = state[e].quantity + 1;
        }
      }
      return { ...state, ...action.payload };
    case types.removeProductToCart:
      if (Object.hasOwn(state, action.payload)) {
        delete state[action.payload];
      }
      return { ...state };
    case types.removeProductQty:
      if (Object.hasOwn(state, action.payload)) {
        if (state[action.payload].quantity > 1) {
          state[action.payload].quantity -= 1;
        }
      }
      return { ...state };
    case types.addProductQty:
      if (Object.hasOwn(state, action.payload)) {
        state[action.payload].quantity += 1;
      }
      return { ...state };
    default:
      return state;
  }
}
