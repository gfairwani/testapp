import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  UIManager,
  Text,
  StatusBar,
} from 'react-native';



export default  styles = StyleSheet.create({
 
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: (Platform.OS === 'ios') ? 20 : 0,
      backgroundColor: '#EAE9EF',
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#E7EEF4',
        backgroundColor:'#E7EEF4',
        borderWidth: 1
     },
   subcategory:{
       color:'#000000',
       fontSize:15
   },
    iconStyle: {
   
      width: 30,
      height: 30,
      justifyContent: 'flex-end',
      alignItems: 'center',
      tintColor: '#fff'
   
    },
   
    sub_Category_Text: {
      fontSize: 18,
      color: '#000',
      backgroundColor:'#fff',
      padding: 10
    },
   
    category_Text: {
      textAlign: 'left',
      color: '#689af1',
      fontSize: 21,
      padding: 10
    },
   
    category_View: {
      marginVertical: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#ffffff'
    },
   
    Btn: {
      padding: 10,
      backgroundColor: '#FF6F00'
    }
   
  });