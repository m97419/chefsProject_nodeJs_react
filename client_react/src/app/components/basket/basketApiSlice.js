
import ApiSlice from "../../apiSlice"
const basketApiSlice = ApiSlice.injectEndpoints({
    endpoints:(build)=>({
        getBasketByChef1:build.query({
            query:(chefId)=>({
                url:`/api/basket/chef/${chefId}`
            })
            ,providesTags:["basket"]

        }),
        completeBasket:build.mutation({
            query:(id)=>({
                url:`/api/basket/${id}`,
                method:'PUT',
            })
            , invalidatesTags:["basket"]
        }),
        getBasketByCustomer:build.query({
            query:(customerId)=>({
                url:`/api/basket/customer/${customerId}`
            })
            ,providesTags:["basket"]

        }),
        createNewBasket:build.mutation({
            query:(basket)=>({
                url:"/api/basket",
                method:'POST',
                body:basket
            })
           , invalidatesTags:["basket"]

        }),
     

    })
})
export const{ useCreateNewBasketMutation,useGetBasketByChef1Query,useGetBasketByCustomerQuery,useCompleteBasketMutation }=basketApiSlice