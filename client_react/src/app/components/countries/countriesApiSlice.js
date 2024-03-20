
import ApiSlice from "../../ApiSlice"
const countriesApiSlice = ApiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllCountries: build.query({
            query: () => ({
                url: "/api/country"
            })

        }),
        addcountry: build.mutation({
            query: (country) => ({
                url: "/api/country",
                method: 'POST',
                body: country
            })

        })
    })
})
export const { useGetAllCountriesQuery, useAddcountryMutation } = countriesApiSlice