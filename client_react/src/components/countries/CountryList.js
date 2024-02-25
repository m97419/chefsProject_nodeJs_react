import React from "react";
import { useGetAllCountriesQuery } from "./countryApiSlice";

const CountryList = () =>{
    const {data:countries=[],isLoading,isSuccess,isError,error,refetch} = useGetAllCountriesQuery()
    if(isLoading) return<h1>Loading</h1>
    if(isError) return<h1>{error}</h1>
   return(<div>
        {countries.map({Country })}
     </div>)

}
export default CountryList