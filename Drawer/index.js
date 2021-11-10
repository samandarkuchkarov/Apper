import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../pages/Home';
import { Datas } from '../Context';
import { View } from 'react-native';
const Drawer = createDrawerNavigator();



export default function DrawerNav({navigation}){
    const {HeaderCreate} = React.useContext(Datas)
    return(
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen options={{headerTitle:()=>HeaderCreate(navigation,'Header1'),headerLeft:()=><></>}} name="Home" component={Home} />
            {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        </Drawer.Navigator>
    )
}