import { types } from "../types/types";

export function addProduct(product){
  return {
    type: types.addProductToCart,
    payload: product,
  }
}