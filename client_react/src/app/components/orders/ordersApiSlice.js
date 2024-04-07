
import ApiSlice from "../../apiSlice"
const ordersApiSlice = ApiSlice.injectEndpoints({
    endpoints:(build)=>({
        getAllOrders:build.query({
            query:()=>({
                url:"/api/order"
            })

        }),
        getOrderById:build.mutation({
            query:(id)=>({
                url:`/api/order/${id}`
            })

        }),
        createNewOrder:build.mutation({
            query:(order)=>({
                url:"/api/customer",
                method:'POST',
                body:order
            })

        }),
        updateOrder:build.mutation({
            query:(order)=>({
                url:"/api/order",
                method:'PUT',
                body:order
            })

        }),
        completeOrder:build.mutation({
            query:(id)=>({
                url:`/api/order/${id}`,
                method:'PUT',
            })

        }),       
         deleteOrder:build.mutation({
            query:(id)=>({
                url:`/api/order/${id}`,
                method:'POST',
            })

        })
    })
})
export const{ useGetAllOrdersQuery,useGetOrderByIdMutation,useCreateNewOrderMutation,useCompleteOrderMutation,useDeleteOrderMutation }=ordersApiSlice