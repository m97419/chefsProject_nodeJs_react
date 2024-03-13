import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        role:localStorage.getItem("role") || "",
        token:localStorage.getItem("token") || "",
        isUserLoggedIn:localStorage.getItem("token")? true:false,
        isUserLoggedIn:localStorage.getItem("role")? true:false,
        userFullName:""
    },
    reducers:{
        setToken:(state,action)=>{
            const token = action.payload.token
            state.token = token
            state.isUserLoggedIn=true
            localStorage.setItem("token",token)
            const role=action.payload.role
            state.role = role
            localStorage.setItem("role",role)
        },
        removeToken:(state)=>{
            state.token = ""
            state.isUserLoggedIn=false
            localStorage.removeItem("token")

        }
    }
})
export default authSlice.reducer
export const {setToken,removeToken} = authSlice.actions