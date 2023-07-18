import { StyleSheet } from 'react-native';
import {
  horizontalScale, verticalScale, moderateScale, padding,
} from './mixins';



const colors = {
  white: '#fff',
  black: '#000',
  deSelected: '#343434',
  grey: '#EDEEEE',
  primary_background: '#4851EE',
  followButton: '#6814C2'
};

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'black'
      },
    profilePicture:{
        height: moderateScale(120),
        width: moderateScale(120),
        borderRadius: moderateScale(32),
        backgroundColor: 'white',
        
    },
    backgroundImage:{
      width: '100%',
      height: moderateScale(200),
      resizeMode: 'cover' 
    },
    customName:{ 
      marginLeft: 17, 
      color:'white', 
      marginTop: 50
    },
    flex_1:{
      flex: 1
    },
    // absolute
    absolute: {
        position: 'absolute',
      },
      alignItemsCenter: {
        alignItems: 'center',
      },
      alignItemsRight: {
        alignItems: 'flex-end',
      },
      alignViaColumn: {
        flexDirection: 'column',
      },
      alignViaRow: {
        flexDirection: 'row',
      },
      alignViewCenter: {
        justifyContent: 'center',
      },
      alignViewSplit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      justifyBetween: {
        justifyContent: 'space-between',
      },
      justifyFlexEnd: {
        justifyContent: 'flex-end',
      },
    
      //font weight
    
      font_bold:{
        fontWeight: 'bold'
      },
      font_med:{
        fontWeight: "500",
      },
      font_white:{
        color: colors.white
      },
      font_black:{
        color: colors.black
      },
      //font sizes
      font_20:{
        fontSize: moderateScale(20)
      },
      font_22:{
        fontSize: moderateScale(22)
      },
      font_24:{
        fontSize: moderateScale(24)
      },
      //padding
      padding10:{
        padding: moderateScale(10)
      },
      // margins
      marginLeft30:{
        marginLeft: horizontalScale(30)
      },
      marginRight10:{
        marginRight: horizontalScale(10)
      },
      marginTop20:{
        marginTop: verticalScale(20),
      },
      marginTop55:{
        marginTop: verticalScale(55),
      },
      marginTop100:{
        marginTop: verticalScale(100),
      },
      marginTop115:{
        marginTop: verticalScale(115)
      },

    //   button
    primary_button: {
        width: moderateScale(353),
        backgroundColor: colors.followButton,
        justifyContent: 'center',
        alignItems: 'center',
        height: verticalScale(45),
        marginVertical: verticalScale(30),
        paddingVertical: verticalScale(10),
        paddingHorizontal: verticalScale(20),
        borderRadius: moderateScale(15),
        alignSelf: 'center',
      },
      secondary_button:{
        width: moderateScale(353),
        backgroundColor: colors.deSelected,
        justifyContent: 'center',
        alignItems: 'center',
        height: verticalScale(45),
        marginVertical: verticalScale(30),
        paddingVertical: verticalScale(10),
        paddingHorizontal: verticalScale(20),
        borderRadius: moderateScale(15),
        alignSelf: 'center',
      },
      primary_button_text: {
        color: colors.white,
        fontSize: moderateScale(20),
      },

      //text inputs
      editInput:{ 
        borderBottomColor: 'black',
        borderBottomWidth: 1, 
        width: moderateScale(100), 
        fontSize: 20 
      },
      deSelected:{
        color: colors.deSelected
      },
      // icons
      back:{
        height: moderateScale(20),
        width: moderateScale(20)
      },
});