import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { LogoutUser } from '../../../Store/auth'

const Home2 = () => {
  const dispatch = useDispatch()
  return (
    <View>
      <Button title='Logout' onPress={()=> dispatch(LogoutUser())} /> 
    </View>
  )
}

export default Home2

const styles = StyleSheet.create({})