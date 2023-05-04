import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { LogoutUser } from '../../../Store/auth'

const Home = () => {
  const dispatch = useDispatch()
  return (
    <View>
      <Button title='Logout' onPress={()=> dispatch(LogoutUser())} /> 
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})