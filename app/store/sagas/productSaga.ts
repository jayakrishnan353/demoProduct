
import { put, call } from 'redux-saga/effects';
import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import apiClient from 'app/services/client';
import ApiConfig from 'app/config/api-config';
import * as productActions from 'app/store/actions/productActions';

import { isEmpty } from 'lodash';

export function* productList() {
  

    console.log("product saga called")
    try {
       
      const response =  yield call(apiClient.get,ApiConfig.PRODUCTLIST);
     // console.log('voucherList response', response.data);
      if (response.status == 200) {
        yield put(productActions.onProductListResponse(response.data));

      } else {
        
        showMessage(response.data.data.error);
      }
    } catch (err) {
      showMessage('Something Went Wrong!');
    
    }
  }


  export function showMessage(message : any) {
    setTimeout(() => {
      Alert.alert('Vouchz', message);
      console.log('message===>',message)
    }, 200);
  }