import ApiSlice from "../../apiSlice";

const countriesApiSlice = ApiSlice.injectEndpoints({
    endpoints:(build)=>({
        getAllCountries:build.query({
            query:()=>({
                url:"/api/countries"
            })

        }),
        getCountryById:build.query({
            query:(id)=>({
                url:`/api/countries/${id}`
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
export const {useGetAllCountriesQuery,useGetCountryByIdQuery,useAddcountryMutation}=countriesApiSlice
