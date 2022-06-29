import React, { useEffect, useState } from 'react';

import {

  Text,
  StatusBar,
} from 'react-native';

import styles from './styles';


import { FloatingTextInput, SubmitButton,FloatingPasswordTextInput } from 'app/components';
import commonStyles from 'app/components/CommonStyles';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import *  as helpers from "app/utils/Helpers";
import { showMessage } from 'app/utils/Helpers';
import NavigationService from 'app/navigation/NavigationService';
import {  Loader,  } from 'app/components'
import * as helper from 'app/utils/Helpers'
const Login: React.FC = () => {

  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [isSecure, setIsSecure] = useState(true)


  useEffect(() => {

  }, []);



  const onChangeEmail = (value: any) => {

    setEmailAddress(value)
  }

  const onChangePassword = (value: any) => {
    setPassword(value)
  }
  const hidePassword = () => {
    console.log(isSecure)
    if (isSecure == true) {
      setIsSecure(false)
    }
    else {
      setIsSecure(true)
    }

  }
  

  const loginBtn = async () => {


    if (emailAddress == '') {
      showMessage("Please Enter Email Address")
    }
    else if (helpers.isValidEmail(emailAddress) == false) {
      showMessage("Please Enter Valid Email Address")
    }
    else if (password == '') {
      showMessage("Please Enter Password")
    }
    else if (helpers.checkPasswordRegex(password) == false) {
      showMessage("Strong Password - Minimum 8 characters, containing uppercase letters, lowercase letters, numbers, and special characters")

    }
    else {

      
         helper.storeData('email',emailAddress)
         helper.storeData('password',password)
     NavigationService.navigate("Home")
      
    }
  }

 


  return (
    <KeyboardAwareScrollView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle='dark-content' />
   
      <Text style={[commonStyles.titleTxt, { textAlign: 'center' }]}>Welcome Back!</Text>
      <Text style={[commonStyles.subtitleTxt, { textAlign: 'center' }]}>Login to your account</Text>
      <FloatingTextInput
        txtStyle={{}}
        onChangeText={onChangeEmail}
        placeHolder={"Email Address"}
        isSecure={false}
        values={emailAddress}
        returnKeyType='next'

      />

      <FloatingPasswordTextInput
        txtStyle={{}}
        onChangeText={onChangePassword}
        placeHolder={"password"}
        isSecure={isSecure}
        values={password}
        hidePassword={hidePassword}
        returnKeyType='next'

      />



      <SubmitButton
        title={"Login"}
        onPress={loginBtn}
        btnStyle={{ marginTop: 30 }}
      />

 
    </KeyboardAwareScrollView>
  );
};

export default Login;
