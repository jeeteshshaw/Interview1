import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screen/Main/Home'
import Home2 from '../Screen/Main/Home2'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"



const BottomNavigation = createBottomTabNavigator()

const MainStack = () => {
  return (
    <BottomNavigation.Navigator>
        <BottomNavigation.Screen name="Home" component={Home} options={{ tabBarIcon: ({color}) => <Icon color={color} name="home" size={32} />}} />
        <BottomNavigation.Screen name="Home2" component={Home2} />
    </BottomNavigation.Navigator>
  )
}

export default MainStack