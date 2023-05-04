import { createSlice } from "@reduxjs/toolkit";
import { ToastingMessage } from "../util/common";


export interface UserProps{
    name:string;
    email:string;
    password:string;
}

interface authSliceProps{
    user: UserProps | null;
    token:string | null;
    allusers:Array<UserProps>
}

const initialState:authSliceProps = {
    user:null,
    token:null,
    allusers: []
}


const slice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        RegisterUser: (state, {payload})=>{
            state.allusers.push(payload);
            state.user = payload;
            state.token = payload.email;
        },
        LoginUser: (state, {payload})=>{
            let user = state.allusers.filter(user=> (user.email === payload.email && user.password === payload.password));
            if(!user)
            return ToastingMessage("User not found");
            state.token=user[0].email
            state.user=user[0]
            
        },
        LogoutUser:(state)=>{
            state.token = null;
            state.user=null;
        }
    }
    
});


export const {LoginUser, RegisterUser, LogoutUser} = slice.actions;

export default slice.reducer;