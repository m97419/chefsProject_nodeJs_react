
import ApiSlice from "../../ApiSlice"
const customersApiSlice = ApiSlice.injectEndpoints({
    
    endpoints:(build)=>({
        getAllCustomers:build.query({
            query:()=>({
                url:"/api/customer"
            })

        }),
        updateCustomer:build.mutation({
            query:(customer)=>({
                url:"/api/customer",
                method:'PUT',
                body:customer
            })

        }),
        deleteCustomer:build.mutation({
            query:(id)=>({
                url:`/api/customer/${id}`,
                method:'DELETE',
            })

        })
    })
})
export const{ useGetAllCustomersQuery,useUpdateCustomerMutation,useDeleteCustomerMutation }=customersApiSlice