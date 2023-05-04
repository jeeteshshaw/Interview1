import { StyleSheet, Text, View, TextInput, TextStyle, StyleProp, TextInputProps, ViewProps } from 'react-native'
import React from 'react'

export interface CInputProps extends TextInputProps{
    containerStyle?: StyleProp<ViewProps>;
    name:string;
}

const CInput = (props:CInputProps) => {
  return (
    <View style={props.containerStyle || styles.blank}>
      <TextInput {...props}  />
    </View>
  )
}

export default CInput

const styles = StyleSheet.create({
  blank:{}
})