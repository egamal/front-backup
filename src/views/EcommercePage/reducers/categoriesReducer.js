import { types } from "../types/types";

const initialState = []
// const expectedState = {
//   categories: [],
//   filters: {
//     categories: {}
//   }
// }

export default function(state=initialState, action){
  switch (action.type) {
    case types.categoriesLoad:
      return [...action.payload]

    default:
      return state;
  }
}