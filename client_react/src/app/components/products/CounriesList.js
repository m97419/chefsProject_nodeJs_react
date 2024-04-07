import { useGetAllCountriesQuery } from '../countries/countriesApiSlice';
import React, { useEffect, useState } from 'react';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { CascadeSelect } from 'primereact/cascadeselect';
import { Dropdown } from 'primereact/dropdown';
export default function CategoriesList({setProduct}) {
    const { data: countriesData = [], isLoading, isSuccess, isError, error, refetch } =useGetAllCountriesQuery();
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [countries,setCountries] =useState(null);
    useEffect(() => {
        const _countriesData  = countriesData.map(c=>{return{name:c.name,id:c._id}});
        // const   = categoriesData.map(c=>return{name:c.name});
        setCountries(_countriesData)
        console.log(countries);

    }, [isSuccess])
    const select=(e)=>{
        setSelectedCountries(e.value);
        setProduct(prev=>({...prev,
            country:e.value.id}))
        // setProduct(prevState => ({
        //     ...prevState,
        //     country: selectedCountries
        // }))

    }
    return(
        <div className="card flex justify-content-center">
       
        <Dropdown value={selectedCountries} onChange={select} options={countries} optionLabel="name" 
    placeholder="Select a Country" className="w-full md:w-14rem" />
        </div>
    )
}
// 