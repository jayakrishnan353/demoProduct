/**
 *  Redux saga class init
 */
import {  all, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import { productList } from './productSaga';

export default function* watch() {
  yield all([
   takeLatest(types.PRODUCT_LIST,productList)
  ]);

}
