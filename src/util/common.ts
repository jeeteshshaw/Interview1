import { ToastAndroid } from "react-native"

export const ToastingMessage = (message:string, duration=ToastAndroid.SHORT, gravity= ToastAndroid.BOTTOM)=>{
    ToastAndroid.showWithGravity(message, duration, gravity);
}