import ApiSlice from "../../apiSlice"

const productsApiSlice = ApiSlice.injectEndpoints({
    endpoints:(build)=>({
        getAllProducts:build.query({
            query:()=>({
                url:"/api/product"
            })
            ,providesTags:["product"]

        }),
        // getAllProductsByChef:build.query({
        //     query:(chefId)=>({
        //         url:`/api/product?chefId=${chefId}`
        //     })
        //     ,providesTags:["prod"]

        // }),
        getByChef:build.query({
            query:(chefId)=>({
                url:`/api/product/chef/${chefId}`
            }),
            providesTags:["prod"]
        })
,
        getProductById:build.mutation({
            query:(id)=>({
                url:`/api/product/${id}`
            })
            // providesTags:["prod"]

        }),
        createNewProduct:build.mutation({
            query:(product)=>({
                url:"/api/product",
                method:'POST',
                body:product
            }),
            invalidatesTags:["prod"]
        }),
        updateProduct:build.mutation({
            query:(product)=>({
                url:"/api/product",
                method:'PUT',
                body:product
            }),
            invalidatesTags:["prod"]
        }),       
        deleteProduct:build.mutation({
            query:(id)=>({
                url:"/api/product",
                method:'DELETE',
                body:id

            }),
            invalidatesTags:["prod"]

        }),
        getByCountry:build.query({
            query:(countryId)=>({
                url:`/api/product/country/${countryId}`
            }),
            providesTags:["prodc"]


        })

    })
})
export const{ useGetAllProductsQuery,useGetProductByIdMutation,useCreateNewProductMutation,useUpdateProductMutation,useDeleteProductMutation,useGetByCountryQuery,useGetByChefQuery }=productsApiSlice