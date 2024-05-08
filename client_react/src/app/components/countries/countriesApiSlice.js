
import ApiSlice from "../../apiSlice"

const countriesApiSlice = ApiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllCountries: build.query({
            query: () => ({
                url: "/api/country"
            })
            ,providesTags:["country"]

        }),
        addcountry: build.mutation({
            query: (country) => ({
                url: "/api/country",
                method: 'POST',
                body: country
            }),
            invalidatesTags:["country"]

        })
    })
})
export const { useGetAllCountriesQuery, useAddcountryMutation } = countriesApiSlice