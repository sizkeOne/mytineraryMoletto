import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../utils/axios";
import { LS } from "../../utils/LocalStorage";

const login = createAction('login', (credentials)=>{

    const reducerData = {
        user: credentials.userData,
        token: credentials.token,
        status:"online"
    } 
    LS.set('token', credentials.token)
return{
    payload: reducerData
}
})

const signup = createAction('signup', (credentials)=>{

    const reducerData= {
        user: credentials.userData,
        token: credentials.token,
        status:"online"
    }
    return{
        payload: reducerData
    }
})

const authenticate = createAsyncThunk('authenticate', async () => {

    try {
        
        const token = LS.getText('token')
        console.log(token);
        const {data} = await server.get('/auth/token',{
            headers:{
                Authorization: "Bearer " + token
            }
        })
        
        const reducerData= {
            user: data.userData,
            status:"online"
        }
      
        
        return reducerData
    } catch (error) {
     console.log(error);   
    }
        
})


export {login, signup, authenticate}