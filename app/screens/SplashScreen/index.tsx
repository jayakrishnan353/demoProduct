import React, { useEffect, } from 'react';
import {
  View,
  ImageBackground,
} from 'react-native';

import styles from './styles';
import images from 'app/config/images';
import NavigationService from 'app/navigation/NavigationService';

import AsyncStorage from '@react-native-community/async-storage';
const Splash: React.FC = () => {

  

  useEffect(() => {

    

    setTimeout(() => {

     
      checkEmail()
    
    }, 1500);
  }, []);

  const checkEmail = async () =>{
    const value = await AsyncStorage.getItem('email');

    console.log("value",value)
    if(value == ''|| value == null)
    {
      NavigationService.navigate("Login")
    }
    else{
      NavigationService.navigate("Home")
    }

  
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} source={images.splashscreen}>
      </ImageBackground>
    </View>
  );
};

export default Splash;