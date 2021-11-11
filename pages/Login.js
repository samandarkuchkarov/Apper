import React from "react";
import { View,ImageBackground,StyleSheet,Image,Dimensions,TextInput,Text, TouchableWithoutFeedback,Keyboard } from "react-native";
const { width: screenWidth,height:screenHeight } = Dimensions.get('window')

export default function Login(){
    const changeHandler = (text,area)=>{
        let newData = {...data}
        newData[area] = text;
        setData({...newData})
    }
    const [errorColor,setError] = React.useState('#969696')
    const [data,setData] = React.useState({
        area1:'',
        area2:'',

    }) 
    const showkey
    const textInputs = []
    React.useEffect(()=>{
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
    
        return () => {
          Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
          Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
        };
    
    },[])
    const _keyboardDidShow = () =>{
        
    }
    const _keyboardDidHide = () =>{
        
    }
    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                 <View style={styles.loginPageDemo1}>{true?<ImageBackground resizeMode='contain' style={styles.loginPageDemo1} source={{uri:'https://accounts.appypie.com/assets/images/new-login-bg.png'}}>
                    <View style={styles.firstContent}>
                       <Image style={styles.profilePhone} source={{uri:'https://images.appypie.com/wp-content/uploads/2021/06/03064920/Apps-for-Android-and-iPhone.png'}}/>
                       <Text style={styles.title}>Build your app without code</Text>
                        <View style={styles.textAreaBlock}>
                            <View style={styles.textAreaItem}>
                                <View style={styles.absoluteElement}>
                                    <Image style={styles.iconInput} source={require('../assets/email.png')}/>
                                </View>
                                <TextInput placeholder="Email address"  ref={(input)=>{textInputs[0]=input}} value={data.area1} onChangeText={(text)=>changeHandler(text,'area1')} style={{...styles.input,borderColor:errorColor}} autoCompleteType={'off'} autoCorrect={false}/>
                            </View>
                            <View style={styles.textAreaItem}>
                                <View style={styles.absoluteElement}>
                                    <Image style={styles.iconInput} source={require('../assets/lock.png')}/>
                                </View>
                                <TextInput placeholder="Password"  ref={(input)=>{textInputs[0]=input}} value={data.area2} onChangeText={(text)=>changeHandler(text,'area2')} style={{...styles.input,borderColor:errorColor}} autoCompleteType={'off'} autoCorrect={false}/>
                            </View>
                            <View style={styles.textAreaItem}>
                                <View style={styles.absoluteElement}>
                                    <Image style={styles.iconInput} source={require('../assets/lock.png')}/>
                                </View>
                                <TextInput placeholder="Password"  ref={(input)=>{textInputs[0]=input}} value={data.area2} onChangeText={(text)=>changeHandler(text,'area2')} style={{...styles.input,borderColor:errorColor}} autoCompleteType={'off'} autoCorrect={false}/>
                            </View>
                            <TouchableWithoutFeedback>
                                <View style={styles.submit}>
                                    <Text style={styles.submitText}>
                                        CREATE ACCOUNT
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={styles.bottomText}>Already have an account? <TouchableWithoutFeedback><Text style={styles.bottomTextLogin}>Login</Text></TouchableWithoutFeedback></Text>
                    </View>
                </ImageBackground>:<View style={styles.loginPageDemo1}>
                <Image style={styles.profilePhone} source={{uri:'https://images.appypie.com/wp-content/uploads/2021/06/03064920/Apps-for-Android-and-iPhone.png'}}/>
                <View style={styles.textAreaBlock}></View>
            </View>}
            </View>
        </TouchableWithoutFeedback>
   
    )
}
const styles = StyleSheet.create({
    loginPageDemo1:{
        flex: 1, 
        display:'flex',
        alignItems:'center',
        resizeMode:'stretch',
        justifyContent:'space-between'
    },
    firstContent:{
        flex: 1, 
        display:'flex',
        alignItems:'center',
    },
    profilePhone:{
        width:screenWidth,
        resizeMode:'contain',
        height:300,
    },
    title:{
        fontSize:24,
        textAlign:'center',
        fontWeight:'bold',
        width:250,
        marginBottom:20,
        color:'#052d5b'
    },
    bottom:{
        marginBottom:10,
        width:'100%',
        alignItems:'center',
    },
    textAreaItem:{
        position:'relative',
        marginBottom:20
    },
    iconInput:{
        width:45,
        height:35,
        resizeMode:'contain',
    },
    absoluteElement:{
        position:'absolute',
        right:20,
        height:60,
        justifyContent:'center'
    },
    input:{
        width:screenWidth-40,
        height:60,
        borderRadius:50,
        borderWidth:2,
        borderColor:"#052d5b",
        padding:20
    },
    submit:{
        backgroundColor:'#1a6cff',
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
    },
    submitText:{
        color:'#fff',
        fontSize:24
    },
    bottomText:{
        fontSize:14
    },
    bottomTextLogin:{
        fontSize:14,
        fontWeight:'bold'
        
    }
});