import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './Drawer';
import { ContextProvider } from './Context';
//import TabNavigation from './Tab/Index';



export default function App() {
  return (
    <View style={styles.container}>
      <ContextProvider>
       <NavigationContainer>
          {true?<DrawerNav/>:<></>}
          {false?<TabNavigation/>:<></>}
        </NavigationContainer>
        <StatusBar style="auto" />
      </ContextProvider>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
