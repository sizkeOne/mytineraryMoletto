import { createAction, createAsyncThunk } from "@reduxjs/toolkit";


const login = createAction('login', ()=>{
return{
    payload: 'message'
}
})

const signup = createAction('signup', ()=>{
    return{
        payload: 'message'
    }
})

const authenticate = createAsyncThunk('authenticate', ()=>{
    return{
        payload: 'message'
    }
})


export {login, signup, authenticate}