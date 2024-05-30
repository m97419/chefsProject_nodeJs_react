import { useGetAllCountriesQuery } from '../countries/countriesApiSlice';
import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { CascadeSelect } from 'primereact/cascadeselect';
import { Dropdown } from 'primereact/dropdown';
import { useAddcountryMutation } from '../countries/countriesApiSlice';
export default function CountryList({setProduct}) {
    const { data: countriesData = [], isLoading, isSuccess, isError, error, refetch } =useGetAllCountriesQuery();
    const [addFunc, { data: data = [] }] =useAddcountryMutation();
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [countries,setCountries] =useState(null);
    const [addCountryDialog, setAddCountryDialog] = useState(false);
    const [country, setCountry] = useState({
        name: "",
        // flag: ""

    });
        useEffect(() => {
        const _countriesData  = countriesData.map(c=>{return{name:c.name,id:c._id}});
        // const   = categoriesData.map(c=>return{name:c.name});
        setCountries(_countriesData)
        console.log(countries);

    }, [isSuccess])
    useEffect(() => {
        const _countriesData  = countriesData.map(c=>{return{name:c.name,id:c._id}});
        setCountries(_countriesData)
    }, [countriesData])
    
    const select=(e)=>{
        setSelectedCountries(e.value);
        setProduct(prev=>({...prev,
            country:e.value.id}))}
        // setProduct(prevState => ({
        //     ...prevState,
        //     country: selectedCountries
        // }))
        const CountryDialog = () => {
            setAddCountryDialog(true)
        } 
        const hideAddCountryDialog = () => {
            setAddCountryDialog(false)
            // setCountries(null)
        }
        const handlename = (e) => {
            setCountry(prevState => ({
                ...prevState,
                name: e.target.value
            }))
        };
        // const handleflag = (e) => {
        //     setCountry(prevState => ({
        //         ...prevState,
        //         flag: e.target.value
        //     }))
        // };
        const handle = () => {
            try {
                console.log(country);
                addFunc(country);
                setAddCountryDialog(false)
            }
            catch {
    
            }
        }
        const addCountryDialogFooter = (
            <React.Fragment>
                <Button label="Cancel" icon="pi pi-times" outlined onClick={hideAddCountryDialog} />
               {country.name!= null && country.name!="" &&<Button label="Add" icon="pi pi-check" onClick={handle} />}
            </React.Fragment>
        );
       
    return(
        <div className="card flex justify-content-center">
       
        <Dropdown value={selectedCountries} onChange={select} options={countries} optionLabel="name" 
    placeholder="Select a Country" className="w-full md:w-20rem" />&nbsp;
    {/* className="w-full md:w-20rem" />  */}

      <Button onClick={CountryDialog}>AddCountry</Button>
      <Dialog visible={addCountryDialog} footer={addCountryDialogFooter} onHide={hideAddCountryDialog}  >
                <div>
                    <InputText placeholder="name" onChange={handlename}></InputText><br></br><br></br>
                    {/* <InputText placeholder='pictures' onChange={handlepictures}></InputText><br></br><br></br> */}
                    {/* <InputText placeholder="flag" onChange={handleflag} ></InputText><br></br><br></br> */}
                </div>
            </Dialog>

        </div>
    )
}
// 