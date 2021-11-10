import React,{createContext} from 'react'
import { View,StyleSheet,Text,Dimensions,Image,TouchableWithoutFeedback } from 'react-native';
import { Demo1 } from '../Components/HeaderComponents';
//import {options,HeaderLeft,HeaderRight,HeaderMovie} from './components/header'
//import axios from 'axios'
//import { Dimensions } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import { Alert } from 'react-native';

const { width: screenWidth,height:screenHeight } = Dimensions.get('window')
export const Datas = createContext(null);

export const ContextProvider = (props) => {
    const { children } = props;
    const HeaderCreate = (navigation,position) => {
      const Options = {
        Header1:()=>{
           return (
           <View style={{...styles.defaultHeaderStyle}}>
              <Demo1/>
           </View>
           )
        },
        Header2:()=>{},
        Header3:()=>{},
      }
      const Component =  Options[position]
      return <Component/>
    }

    const storeData = async (key,value) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)

      } catch (e) {
        
      }
    }
    
    const getData = async (key) => {
        try {
          const jsonValue = await AsyncStorage.getItem(key)
          if(jsonValue!=='null'){
            if(key==='token'){
              setToken(JSON.parse(jsonValue).token)
              setLogin(1)
            }
          }else{
            if(key==='token'){
              //console.log('token')
              setToken(null)
              setLogin(0)
            }
          }
          console.log(JSON.parse(jsonValue),'getdata')
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
          if(key==='token'){
            setLogin(0)
          }
        }
      
    }
  
    // const login = async(data,setError,navigation,routeName) => {
    //   axios({
    //       method: 'POST',
    //       url:`https://api92.tvcom.uz/api/login`,//28 123457
    //       data
    //       }).then(async(e)=>{
    //           if(!e.data['0'].error){
    //               setError('#e5474c')
    //           }else{
    //               await storeData('abonement',{number:data.abonement})
    //               setToken(e.data['0'].authkey)
    //               await  storeData('token',{token:e.data['0'].authkey})
    //               setLogin(1)
    //               navigation.navigate(routeName)
    //           }
    //       }).catch((e)=>{
    //           console.log(e)
    //       })
    // }




    return(
        <Datas.Provider
          value = {{
            HeaderCreate,
          }}>
            {children}
        </Datas.Provider>
    )
}

const styles = StyleSheet.create({
    defaultHeaderStyle:{
        width:screenWidth,
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#265cc5',
        marginLeft:-16,
        paddingHorizontal:20,
        justifyContent:'space-between'
    },
});