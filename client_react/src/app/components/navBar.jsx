import React from "react";
import { Menubar } from 'primereact/menubar';
import {useNavigate} from "react-router-dom"
import useAuth from "./auth/useAuth";
import { useState } from "react";



const NavBar = () => {
    const {role}=useAuth()
     console.log(role);
     const[myRole,setMyRole]=useState(false)
     if(role == "chaf")
     setMyRole(true);

    const navigate=useNavigate()

    const myAccount = () => {
        console.log("!!!!!!");
        if(localStorage.getItem("user")) {
            navigate(`/myAccount`)
        }
        navigate(`/auth`)
    }

    const barArr = [
        {
            label:"my account", 
            command: myAccount
        },
        {
            label:"products", 
            command: ()=>{navigate(`/`)}
        },
        {
            label:"my basket", 
            command: ()=>{navigate(`/basket`)}
        },
        {
            label:"orders", 
            command: ()=>{navigate(`/orders`)}
        },

    ]
    const barArrChef=[...barArr,
        {
            label:"my product", 
            command: ()=>{navigate(`/table`)}
        }, 
    ]

    return (
        
        <div className="card">
            {role!="chef" && <Menubar model={barArr} />}
            {role=="chef"&& <Menubar model={barArrChef} />}
        </div>
    )
}
export default NavBar
