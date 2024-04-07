import ApiSlice from "../../ApiSlice.js";

const countriesApiSlice = ApiSlice.injectEndpoints({
    endpoints:(build)=>({
        getAllCountries:build.query({
            query:()=>({
                url:"/api/countries"
            })

        }),
        addcountry:build.mutation({
            query:(country)=>({
                url:"/api/countries",
                method:'POST',
                body:country
            })

        })
    })
})
export const {useGetAllCountriesQuery,useAddcountryMutation}=countriesApiSlice
