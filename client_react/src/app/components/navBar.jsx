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
    // console.log(role);
    // const [myRole, setMyRole] = useState(false)
    // if (role == "chaf")
    //     setMyRole(true);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // dispatch(removeToken())

    // const myAccount = () => {
    //     console.log("!!!!!!");
    //     if (localStorage.getItem("user")) {
    //         navigate(`/myAccount`)
    //     }
    //     navigate(`/auth`)
    // }
    const end = () => {
        if (role == "" || role == null)
            return <Button label="כניסה" icon="pi pi-spinner" onClick={() => { navigate(`/login`) }} />
        else
            return <Button label="יציאה" icon="pi pi-power-off" onClick={() => { dispatch(removeToken()); navigate(`/`) }} />
    }
    // const myAccount = () => {
    //     console.log(localStorage.getItem("token"));
    //     if(localStorage.getItem("token")) {
    //         navigate(`/myAccount`)
    //     }
    //     else{
    //         navigate(`/auth`)
    //     }
    // }

    const linkStyle = { my: 2, color: 'primary', display: 'block', margin: '0.5rem 0.5rem' }
    const linkStyleActive = { borderBottom: '2px solid #1976d2', borderRadius: '0' }

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

