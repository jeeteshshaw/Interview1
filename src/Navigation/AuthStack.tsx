import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Screen/Auth/Login'
import Register from '../Screen/Auth/Register'
export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
  };
const Stack = createNativeStackNavigator<RootStackParamList>()

const AuthStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}

export default AuthStack