import ApiSlice from "../../ApiSlice";

const chefsApiSlice = ApiSlice.injectEndpoints({
    endpoints:(build)=>({
        getAllChefs:build.query({
            query:()=>({
                url:"/api/chef/"
            })

        }),
        getChefById:build.query({
            query:(id)=>({
                url:`/api/chef/${id}`
            })

        }),
        updateCategory:build.mutation({
            query:(chef)=>({
                url:"/api/chef/",
                method:'PUT',
                body:chef
            })

        }),    
        deleteChef:build.mutation({
            query:(id)=>({
                url:`/api/chef/${id}`,
                method:'DELETE',
            })

        })
    })
})
export const {useGetAllChefsQuery,useGetChefByIdQuery,useUpdateCategoryMutation,useDeleteChefMutation}=chefsApiSlice




