
import ApiSlice from "../../apiSlice"
const ordersApiSlice = ApiSlice.injectEndpoints({
    endpoints:(build)=>({
        getAllProducts:build.query({
            query:()=>({
                url:"/api/product"
            })

        }),
        getProductById:build.mutation({
            query:(id)=>({
                url:`/api/product/${id}`
            })

        }),
        createNewProduct:build.mutation({
            query:(product)=>({
                url:"/api/product",
                method:'POST',
                body:product
            })

        }),
        updateProduct:build.mutation({
            query:(product)=>({
                url:"/api/product",
                method:'POST',
                body:product
            })

        }),       
        deleteProduct:build.mutation({
            query:(id)=>({
                url:`/api/product/${id}`,
                method:'DELETE',
            })

        }),
        getByCountry:build.query({
            query:(countryId)=>({
                url:`/api/product/country/${countryId}`
            })

        }),

    })
})
export const{ useGetAllProductsQuery,useGetProductByIdMutation,useCreateNewProductMutation,useUpdateProductMutation,useDeleteProductMutation,useGetByCountryQuery }=ordersApiSlice