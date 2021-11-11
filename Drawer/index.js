import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../pages/Home';
import { Datas } from '../Context';
import { View } from 'react-native';
import Login from '../pages/Login';
const Drawer = createDrawerNavigator();



export default function DrawerNav({navigation}){
    const {HeaderCreate} = React.useContext(Datas)
    return(
        <Drawer.Navigator initialRouteName="Login">
            <Drawer.Screen options={{headerTitle:()=>HeaderCreate(navigation,'Header1'),headerLeft:()=><></>}} name="Home" component={Home} />
            <Drawer.Screen options={{headerShown:false}} name="Login" component={Login} />
            {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        </Drawer.Navigator>
    )
}