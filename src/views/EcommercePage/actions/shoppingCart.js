import { types } from "../types/types";

export function addProduct(product){
  return {
    type: types.addProductToCart,
    payload: product,
  }
}

export function removeProduct(product){
  return {
    type: types.removeProductToCart,
    payload: product,
  }
}

export function removeProductQty(product){
  return {
    type: types.removeProductQty,
    payload: product
  }
}

export function addProductQty(product){
  return {
    type: types.addProductQty,
    payload: product
  }
}