
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';
import { useGetAllCountriesQuery } from "./countriesApiSlice";
import Country from "../countries/Country"
import { Link, Outlet, Route, Routes } from 'react-router-dom';
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
     // const newcountries = countries.map(country=>{return{label:country.name,key:country._id,command:()=>{navigate(`/country/${country._id}`)}}})
     const newcountries = countries.map(country => { return { label: country.name, key: country._id, command: () => { navigate(`/countries/${country._id}`) } }; })
     console.log(newcountries);
     return (<div className="card" style={{ position: 'sticky',top:15,  zIndex: 9999 }} >
          <Menubar  model={newcountries} />
          <Outlet/>
</div>
         
    
 
     )

}
export default CountryList
// style={{ position: 'sticky',top:15,  zIndex: 10000 }}
{/* 
//onChange={(e) => setSelectedCountry(e.value)} */}
 {/* <div className="card flex justify-content-center">
               <ListBox filter value={selectedCountry} onChange={onclick} options={countries} optionLabel="name" className="w-full md:w-14rem" />
          </div> */}
          {/* {countries?.map((country)=><Country country={country}/>)} */}

          