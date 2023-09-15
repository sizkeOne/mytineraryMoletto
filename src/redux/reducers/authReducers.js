import { createReducer } from "@reduxjs/toolkit";
import { authenticate, login, signup } from "../actions/authActions";

const initialState= {
    user: {},
    token: null,
    status: 'offline'
}

const authReducer = createReducer(initialState,
    (builder) => builder

    .addCase(login, (state,action)=>{

console.log(action.payload);
const newState = { ...state, ...action.payload}

return newState
    })
    .addCase(signup, (state,action) => {
        const newState = {...state,}
        return newState
    })
    .addCase(authenticate.fulfilled, (state,action) =>{
        const newState = {...state, ...action.payload}
        return newState
    }) 
    )

    export default authReducer