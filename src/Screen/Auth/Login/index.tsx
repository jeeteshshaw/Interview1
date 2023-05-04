import { Button, Dimensions, FlatList, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CInput, { CInputProps } from '../../../Components/CInput'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../../Navigation/AuthStack'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useDispatch } from 'react-redux'
import { LoginUser } from '../../../Store/auth'
import { ToastingMessage } from '../../../util/common'

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;
const Login = () => {
  const navigation = useNavigation<homeScreenProp>();
  const dispatch = useDispatch();
  const [LoginInputs, setLoginInputs] = useState({
    email:"",
    password:"",
  });

  const form:Array<CInputProps> = [
      {
          placeholder:"Email",
          name:"email",
          onChangeText: (text)=> setLoginInputs({...LoginInputs, email:text})
      },
      {
          placeholder:"Password",
          secureTextEntry:true,
          name:"password",
          onChangeText: (text)=> setLoginInputs({...LoginInputs, password:text})
      }
  ]
  const _onLoginSubmit = ()=>{
   
    if(LoginInputs.email.length===0){
        return ToastingMessage("Please enter the Email");
    }
    if(LoginInputs.password.length===0){
        return ToastingMessage("Please enter the Password");
    }
    dispatch(LoginUser(LoginInputs))
}
    const FooterComp = ()=>(
        <View>
            <Button title='Login' onPress={_onLoginSubmit} />
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:Dimensions.get("screen").height*0.01}}>
            <TouchableOpacity onPress={()=> navigation.navigate("Register")}><Text style={{color:"blue", textDecorationStyle:"dashed", textDecorationLine:"underline"}}>Register</Text></TouchableOpacity>
            </View>
        </View>
    )
  return (
    <View>
      {/* <Text>Login</Text> */}
      {/* <CInput placeholder='Eail' /> */}
      <FlatList 
        data={form}
        keyExtractor={(item)=> item.name}
        ListFooterComponent={()=> <FooterComp />}
        renderItem={({item, index})=>(
            <CInput {...item} />
        )}
      />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})