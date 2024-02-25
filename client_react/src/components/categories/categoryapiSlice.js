import apiSlice from "../../src/app/apiSlice";

const categoriesApiSlice = apiSlice.injectEndpoints({
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
                method:'POST',
                body:category
            })

        }),    
        deleteCategory:build.mutation({
            query:(id)=>({
                url:"/api/category/",
                method:'POST',
                body:category
            })

        })
    })
})
export const {useGetAllCategoriesQuery,useCreateNewCategoryMutation,useUpdateCategoryMutation,useDeleteCategoryMutation}=categoriesApiSlice