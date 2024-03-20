import { createSlice } from "@reduxjs/toolkit";

const categotySlice = createSlice({
    name:"categoty",
    initialState:{
        categoty:[]
    },
    reducers:{
        setCategoty:(state,action)=>{
            
        }
    }
})
export default authSlice.reducer
export const {setToken,removeToken} = authSlice.actions