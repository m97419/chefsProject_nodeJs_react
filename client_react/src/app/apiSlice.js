import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const ApiSlice = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:7788",
        credentials:'include',
        prepareHeaders:(headers,{getState})=>{
            const token = getState().auth.token
            const role = getState().auth.role
            if(token){
                headers.set("authorization",`Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints:()=>({})
})
export default ApiSlice