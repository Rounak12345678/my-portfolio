import { createSlice } from "@reduxjs/toolkit"
import { destroyCookie } from "nookies"

export const initialState = {
    isLoggedIn : false,
    userData:null
}

type IUserData = {
    isLoggedIn : false,
    userData:null
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        IsCheckdIn:(state,{payload})=>{
            state.isLoggedIn = payload?.hasToken;
            state.userData = payload?.user; 
        },
        LoggedOut:(state)=>{
            state.isLoggedIn = false;
            state.userData = null;

            destroyCookie(null,"token",{path:'/'})
        }
    },
    extraReducers:()=>{

    }
})


export const { LoggedOut,IsCheckdIn} = userSlice.actions