import apiSlice from "../../src/app/apiSlice";

const countriesApiSlice = apiSlice.injectEndpoints({
    endpoints:(build)=>({
        getAllCountries:build.query({
            query:()=>({
                url:"/api/countries"
            })

        }),
        addcountry:build.mutation({
            query:(country)=>({
                url:"/api/countries",
                method:POST,
                body:country
            })

        })
    })
})
export const {useGetAllCountriesQuery,useAddcountryMutation}=countriesApiSlice