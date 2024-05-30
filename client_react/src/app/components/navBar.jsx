import React from "react";
import { Menubar } from 'primereact/menubar';
import {useNavigate} from "react-router-dom"
import useAuth from "./auth/useAuth";
import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { removeToken } from "./auth/authSlice";
import {  useDispatch } from "react-redux";


const NavBar = () => {
    const {role}=useAuth()
     console.log(role);
     const[myRole,setMyRole]=useState(false)
     if(role == "chaf")
     setMyRole(true);

    const navigate=useNavigate()
    const dispatch = useDispatch()

// dispatch(removeToken())

    const myAccount = () => {
        console.log(localStorage.getItem("token"));
        if(localStorage.getItem("token")) {
            navigate(`/myAccount`)
        }
        else{
            navigate(`/auth`)
        }
    }

    const linkStyle = { my: 2, color: 'primary', display: 'block', margin: '0.5rem 0.5rem' }
  const linkStyleActive = { borderBottom: '2px solid #1976d2', borderRadius: '0' }

    const barArr = [
        {
            label:"my account", 
            command: myAccount
        },
        {
            label:"products", 
            command: ()=>{navigate(`/countries`)}
        },
        {
            label:"my basket", 
            command: ()=>{navigate(`/basket`)}
        },
        {
            label:"orders", 
            command: ()=>{navigate(`/orderscustomer`)}
        },


    ]
    const barArrChef=[...barArr,
        {
            label:"my product", 
            command: ()=>{navigate(`/table`)}
        }, 
        {
            label:"my orders", 
            command: ()=>{navigate(`/orders`)}
        }, 
    ]

    return (
        
        <div className="card" style={{ position: 'sticky',top:0,  zIndex: 10000 }} >
            {role!="chef" && <Menubar model={barArr}  
             end={<Button label="Logout" icon="pi pi-power-off" onClick={()=>{dispatch(removeToken()); navigate(`/`)}} />}  
             />}
            {role=="chef"&& <Menubar model={barArrChef} 
          
            end={<Button label="Logout" icon="pi pi-power-off" onClick={()=>{dispatch(removeToken()); navigate(`/`)}} />}  />}
        </div>
    )
}
export default NavBar

