
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

const initialState = {
  productList: [],

};

export const productReducer = createReducer(initialState, {
   
    [types.PRODUCT_LIST](state : any,  action : any) {
       // console.log("called")
      return {
        ...state,
      };
    },
    [types.PRODUCT_RESPONSE](state : any, action : any) {
      return {
        ...state,
        productList: action.response,
      };
    },
    
  });