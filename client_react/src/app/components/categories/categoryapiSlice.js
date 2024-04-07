import ApiSlice from"../../apiSlice"

const categoriesApiSlice = ApiSlice.injectEndpoints({
    endpoints:(build)=>({
        getAllCategories:build.query({
            query:()=>({
                url:"/api/category/"
            })

        }),
        createNewCategory:build.mutation({
            query:(category)=>({
                url:"/api/category/",
                method:'POST',
                body:category
            })

        }),
        updateCategory:build.mutation({
            query:(category)=>({
                url:"/api/category/",
                method:'PUT',
                body:category
            })

        }),    
        deleteCategory:build.mutation({
            query:(id)=>({
                url:`/api/category/${id}`,
                method:'DELETE',
            })

        })
    })
})
export const {useGetAllCategoriesQuery,useCreateNewCategoryMutation,useUpdateCategoryMutation,useDeleteCategoryMutation}=categoriesApiSlice