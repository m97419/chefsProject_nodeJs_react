import React from "react";
import { Menubar } from 'primereact/menubar';
import {useNavigate} from "react-router-dom"

const NavBar = () => {

    const navigate=useNavigate()

    const myAccount = () => {
        if(localStorage.getItem("user")) {
            navigate(`/myAccount`)
        }
        navigate(`/login`)
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
        }
    ]

    return (
        <div className="card">
            <Menubar model={barArr} />
        </div>
    )
}
export default NavBar
