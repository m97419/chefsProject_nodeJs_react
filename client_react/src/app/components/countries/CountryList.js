import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';
import { useGetAllCountriesQuery } from "./countriesApiSlice";
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from "react-router-dom"
const CountryList = () => {
     const { data: countries = [], isLoading, isSuccess, isError, error, refetch } = useGetAllCountriesQuery()
     const navigate = useNavigate()
     if (isError) {
          console.log(error);
          console.log("error!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
     }
     const newcountries = countries.map(country => { return { label: country.name, key: country._id, command: () => { navigate(`/countries/${country._id}`) } }; })
     console.log(newcountries);
     return (<div className="card" style={{ position: 'sticky', top: 15, zIndex: 9999 }} >
          <Menubar model={newcountries} />
          <Outlet />
     </div>



     )

}
export default CountryList

