import CountryList from "../countries/CountryList";
import React, { useState } from "react";
import { classNames } from 'primereact/utils';
import 'primereact/resources/themes/saga-orange/theme.css'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Register from "./Register";
import Login from "./Login";

export default function LoginDesign(){
    const [image, setImage] =useState(null)
    const header = (
           <img alt="Card"  className="picturesizebig" src="http://localhost:7788/uploads/gg.webp"></img>
    )
    return (
        <div className="card flex justify-content-center">
                <Card title="ברוכים הבאים" subTitle="בתאבון"  header={header} className="md:w-25rem">

             <Login></Login>
            </Card>
        </div>
    )
}
