import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Login from './screens/Login'
import Profile from './screens/Profile'
import Home from './screens/Home'
import Detail from './screens/Detail'

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="Profile" component={Profile}/>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Detail" component={Detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}