import { StyleSheet } from 'react-native';
import {
  horizontalScale, verticalScale, moderateScale, padding,
} from './mixins';



const colors = {
  white: '#fff',
  black: '#000',
  deSelected: '#C7D2E2',
  grey: '#EDEEEE',
  primary_background: '#8fcce7',
  followButton: '#405DE6'
};

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
      },
    profilePicture:{
        height: moderateScale(125),
        width: moderateScale(125),
        borderRadius: moderateScale(75),
        backgroundColor: 'cyan'
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

      //font sizes
      font_20:{
        fontSize: 20
      },
      font_22:{
        fontSize: 22
      },
      font_24:{
        fontSize: 24
      },
      // margins
      marginLeft30:{
        marginLeft: horizontalScale(30)
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
      }
});