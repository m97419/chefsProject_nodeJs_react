import React from "react";
import { Menubar } from 'primereact/menubar';
import {useNavigate} from "react-router-dom"

const NavBar = () => {

    const navigate=useNavigate()

    const myAccount = () => {
        console.log(localStorage.getItem("token"));
        if(localStorage.getItem("token")) {
            navigate(`/myAccount`)
        }
        else{
            navigate(`/auth`)
        }
    }

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
            command: ()=>{navigate(`/orders`)}
        }
    ]

    return (
        <div className="card">
            <Menubar model={barArr} />
        </div>
    )
}
export default NavBar
