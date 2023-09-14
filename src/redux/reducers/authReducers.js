import { createReducer } from "@reduxjs/toolkit";
import { build } from "vite";
import { authenticate, signup } from "../actions/authActions";

const initialState= {
    user: {},
    token: null,
    status: 'offline'
}

const authReducer = createReducer(initialState,
    (builder) => builder
    .addCase(login, (state,action)=>{
const newState = {...state, }
return newState
    })
    .addCase(signup, (state,action)=>{
        const newState = {...state, }
        return newState
    })
    .addCase(authenticate.fulfilled, (state,action=>{
        const newState = {...state, }
        return newState
    }) 
    )
)
    export default authReducer