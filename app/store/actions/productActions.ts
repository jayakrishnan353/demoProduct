import * as types from './types';
export function requestProductList() {
    return {
      type: types.PRODUCT_LIST,
    };
  }
  export function onProductListResponse(response : any) {
    return {
      type: types.PRODUCT_RESPONSE,
      response,
    };
  }