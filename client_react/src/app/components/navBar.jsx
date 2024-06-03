import React from "react";
import { Menubar } from 'primereact/menubar';
import { useNavigate } from "react-router-dom"
import useAuth from "./auth/useAuth";
import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { removeToken } from "./auth/authSlice";
import { useDispatch } from "react-redux";


const NavBar = () => {
    const { role } = useAuth()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const end = () => {
        if (role == "" || role == null)
            return <Button label="כניסה" icon="pi pi-spinner" onClick={() => { navigate(`/login`) }} />
        else
            return <Button label="יציאה" icon="pi pi-power-off" onClick={() => { dispatch(removeToken());localStorage.setItem('basket',[]); navigate(`/`) }} />

    }

    const barArrCustomer = [
        {
            label: "להרשמה",
            command: () => { navigate(`/auth`) }
        },
        {
            label: "בחר שף",
            command: () => { navigate(`/chooseChef`) }
        },
        {
            label: "סגנון",
            command: () => { navigate(`/chooseCountry`) }
        },
        {
            label: "מה שבחרתי",
            command: () => { navigate(`/basket`) }
        },
        {
            label: "הזמנות",
            command: () => { navigate(`/orderscustomer`) }
        },


    ]
    const barArrChef = [
        {
            label: "הרשמה",
            command: () => { navigate(`/auth`) }
        },
        {
            label: "האוכל שלי",
            command: () => { navigate(`/table`) }
        },
        {
            label: "הזמנות",
            command: () => { navigate(`/orders`) }
        },
    ]

    return (

        <div className="card" style={{ position: 'sticky', top: 0, zIndex: 10000 }} >
            {role != "chef" && <Menubar model={barArrCustomer}
                end={end}
            />}
            {role == "chef" && <Menubar model={barArrChef}

                end={<Button label="Logout" icon="pi pi-power-off" onClick={() => { dispatch(removeToken()); navigate(`/`) }} />} />}
        </div>
    )
}
export default NavBar

