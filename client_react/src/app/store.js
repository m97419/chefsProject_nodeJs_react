import {configureStore} from "@reduxjs/toolkit"
import apiSlice from "./apiSlice"
import authSliceReducer from "../components/auth/authSlice"
import { setupListeners } from "@reduxjs/toolkit/query"
const store = configureStore({
    reducer:{
        auth:authSliceReducer,
        [apiSlice.reducerPath]:apiSlice.reducer
    },
    middleware:(GetDefaultMiddleware)=>GetDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})
export default store

setupListeners(store.dispatch)