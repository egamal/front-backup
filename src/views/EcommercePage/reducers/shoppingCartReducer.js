import { types } from "../types/types";


const initialState = {};

export default function(state = initialState, action){
  switch (action.type) {
    case types.addProductToCart:
      for(const e in state){
        if(e === Object.keys(action.payload)[0]){
          action.payload[e].quantity = state[e].quantity + 1
        }
      }
      return {...state, ...action.payload}
    default:
      return state;
  }
}
