import { Button, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CInput, { CInputProps } from '../../../Components/CInput'
import { RegisterUser, UserProps } from '../../../Store/auth'
import { useDispatch } from 'react-redux'
import { ToastingMessage } from '../../../util/common'

const Register = () => {
    
    const [RegisterInputs, setRegisterInputs] = useState<UserProps>({
        name:"",
        email:"",
        password:""
    })
    const dispatch = useDispatch();
    
    const form:Array<CInputProps> = [
        {
            placeholder:"Email",
            name:"email",
            onChangeText: (text)=> setRegisterInputs({...RegisterInputs, email:text})
        },
        {
            placeholder:"Name",
            name:"name",
            onChangeText: (text)=> setRegisterInputs({...RegisterInputs, name:text})

        },
        {
            placeholder:"Password",
            secureTextEntry:true,
            name:"password",
            onChangeText: (text)=> setRegisterInputs({...RegisterInputs, password:text})

        }
    ]

    const _onRegisterSubmit = ()=>{
        if(RegisterInputs.name.length===0){
            return ToastingMessage("Please enter the Name");
        }
        if(RegisterInputs.email.length===0){
            return ToastingMessage("Please enter the Email");
        }
        if(RegisterInputs.password.length===0){
            return ToastingMessage("Please enter the Password");
        }
        dispatch(RegisterUser(RegisterInputs))
    }

    const FooterComp = ()=>(
        <View>
            <Button title='Register' onPress={_onRegisterSubmit} />
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:Dimensions.get("screen").height*0.01}}>
            <Text>Register </Text>
            <TouchableOpacity><Text style={{color:"blue"}}>Click Here</Text></TouchableOpacity>
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

export default Register

const styles = StyleSheet.create({})