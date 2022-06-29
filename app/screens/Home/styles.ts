import AppStyles from 'app/config/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf:'center'
  },
  cateogryTxt:{
    fontFamily : AppStyles.fonts.FONT_BOLD,
    fontSize : 14,
    color : AppStyles.color.COLOR_BLACK,
    marginLeft : 10,
  },
  titleTxt:{
    fontFamily : AppStyles.fonts.FONT_MEDIUM,
    fontSize : 14,
    color : AppStyles.color.COLOR_BLACK,
    marginLeft : 10,

  },
  priceTxt:{
    fontFamily : AppStyles.fonts.FONT_MEDIUM,
    fontSize : 12,
    color : AppStyles.color.COLOR_GREEN,
    marginLeft : 10,
  },
  ratingTxt:{
    fontFamily : AppStyles.fonts.FONT_MEDIUM,
    fontSize : 10,
    color : AppStyles.color.COLOR_GREY,
    marginLeft : 10,
  },
  decrpitonTxt:{
    marginTop : 10,
    fontFamily : AppStyles.fonts.FONT_REGULAR,
    fontSize : 12,
    color : AppStyles.color.COLOR_BLACK,
    marginLeft : 10,

  },
  productImgView:{
    width : '80%',
    height : 150, 
    marginTop : 5,
    marginBottom : 10,
    marginLeft : 10,
    alignSelf:"center"
  },
  productImageSuperView:{
    width : '30%',
    alignItems:'center',
    justifyContent:'center'
  },
  productView:{
    width : '90%',
    marginTop : 10,
    marginLeft : 20,
    marginRight : 10,
    borderRadius : 5,
    borderWidth : 1,
    borderColor : 'grey'
  },
  button: {
    marginTop: 20,
    height: 70,
    width: 420,
    justifyContent: 'center',
    alignItems: 'center',
 // alignSelf:"center",
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
        width: 1,
        height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
},
});

export default styles;