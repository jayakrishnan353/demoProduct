import { WToast } from "react-native-smart-tip";
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from "react-native";
import ApiConfig from "app/config/api-config";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { report } from "node:process";


  export const getData = async (key: any, json: boolean) => {
    const value = await AsyncStorage.getItem(key);
    return json ? JSON.parse(value) : value;
  };
  
  export const storeData = async (key: any, value: any) => {
    if (value && typeof value !== "string") {
      value = JSON.stringify(value);
    }
    await AsyncStorage.setItem(key, value);
  };
  

  export function showMessage(message: string) {
    setTimeout(() => {
      Alert.alert("FreshVoice", message);
    }, 100);
  }

  export const isValidEmail = (val: any) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      val
    );
  };
  
  export const checkPasswordRegex = (text : string) =>
  {
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      console.log("regex value",regex.test(text))
      if (regex.test(text)) {

          return true;

      }

      return false;
  }
