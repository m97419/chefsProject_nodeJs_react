
import ApiSlice from "../../apiSlice"
const basketApiSlice = ApiSlice.injectEndpoints({
    endpoints:(build)=>({
        // getAllOrders:build.query({
        //     query:()=>({
        //         url:"/api/order"
        //     })

        // }),
        getBasketByChef1:build.query({
            query:(chefId)=>({
                url:`/api/basket/chef/${chefId}`
            })

        }),
        createNewBasket:build.mutation({
            query:(basket)=>({
                url:"/api/basket",
                method:'POST',
                body:basket
            })

        }),
        // getByCountry:build.query({
        //     query:(countryId)=>({
        //         url:`/api/product/country/${countryId}`
        //     }),
        // updateOrder:build.mutation({
        //     query:(order)=>({
        //         url:"/api/order",
        //         method:'PUT',
        //         body:order
        //     })

        // }),
        // completeOrder:build.mutation({
        //     query:(id)=>({
        //         url:`/api/order/${id}`,
        //         method:'PUT',
        //     })

        // }),       
        //  deleteOrder:build.mutation({
        //     query:(id)=>({
        //         url:`/api/order/${id}`,
        //         method:'POST',
        //     })

        // }),
        // getOrderByChef:build.query({
        //     query:(chefId)=>({
        //         url:`/api/orderr/chef/${chefId}`
        //     })

        // })

    })
})
export const{ useCreateNewBasketMutation,useGetBasketByChef1Query }=basketApiSlice