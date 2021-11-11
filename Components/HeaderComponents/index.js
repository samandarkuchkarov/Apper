import React from "react";
import { View,TouchableWithoutFeedback,Image,StyleSheet } from "react-native";

export  function Demo1(){
    return(
        <>
        <View style={styles.leftDemo1}>
            <TouchableWithoutFeedback>
                <Image source={require('../../assets/defaultBurgericon.png')}/>  
            </TouchableWithoutFeedback>  
        </View>
        <View style={styles.centerDemo1}>
            <Image style={styles.logoDemo1} source={require('../../assets/pepsi.png')}/>  
        </View>
        <View style={styles.rightDemo1}>
                
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    logoDemo1:{
        resizeMode:'contain',
        maxHeight:40
    },
    leftDemo1:{
        width:'33.33%'
    },
    centerDemo1:{
        width:'33.33%',
        alignItems:'center',
        justifyContent:'center'
    },
    rightDemo1:{
        width:'33.33%',
        alignItems:'flex-end',
        paddingRight:20,
    }
});