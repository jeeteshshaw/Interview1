import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './src/Navigation/AuthStack'
import { useSelector } from 'react-redux'
import {RootState} from "./src/Store"
import MainStack from './src/Navigation/MainStack'
const App = () => {
  const token = useSelector((state:RootState)=> state.auth.token)
  const alluser = useSelector((state:RootState)=> state.auth.allusers)
  console.log(alluser)
  return (
    <NavigationContainer>
      {token===null?<AuthStack />: <MainStack />}
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})