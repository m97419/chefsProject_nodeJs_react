
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';
import { useGetAllCountriesQuery } from "./countriesApiSlice";
import Country from "../countries/Country"
import { Link, Route, Routes } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import {useNavigate} from "react-router-dom"
const CountryList = () => {
     const { data: countries = [], isLoading, isSuccess, isError, error, refetch } = useGetAllCountriesQuery()
     const navigate=useNavigate()
     // while(isLoading){
     //      console.log("loading!!!!!!!!!!!!!!!!!!!!!!!!");
     // // }
     if(isError){
          console.log(error);
          console.log("error!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
     }
     // else{
     //      console.log(countries);
     // }
     const newcountries = countries.map(country=>{return{label:country.name,command:()=>{navigate(`/country/${country._id}`)}}})
     return (<div className="card">
          <Menubar  model={newcountries} />
</div>
         
 
     )

}
export default CountryList

{/* 
//onChange={(e) => setSelectedCountry(e.value)} */}
 {/* <div className="card flex justify-content-center">
               <ListBox filter value={selectedCountry} onChange={onclick} options={countries} optionLabel="name" className="w-full md:w-14rem" />
          </div> */}
          {/* {countries?.map((country)=><Country country={country}/>)} */}