import ApiSlice from "../../apiSlice"
const authApiSlice = ApiSlice.injectEndpoints({
    endpoints:(build)=>({
        registerChef:build.mutation({
            query:(registerChef)=>({
                url:"/api/auth/registerChef",
                method:'POST',
                body:registerChef
            })
        }),
      
        registerCustomer:build.mutation({
            query:(registerCustomer)=>({
                url:"/api/auth/registerCustomer",
                method:'POST',
                body:registerCustomer
            })
        }),
        login:build.mutation({
            query:(loginData)=>({
                url:"/api/auth/login",
                method:'POST',
                body:loginData
            })
        })
    })
})
export const {useRegisterChefMutation,useRegisterCustomerMutation,useLoginMutation} = authApiSlice