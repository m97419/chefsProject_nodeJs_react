import CountryList from "../countries/CountryList";
import React from "react";
import { classNames } from 'primereact/utils';
import 'primereact/resources/themes/saga-orange/theme.css'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Register from "./Register";


export default function RegisterCustomer(){
    const header = (
        <img alt="Card" className="picturesizebig" src="http://localhost:7788/uploads/picture-1712515003668-82244741×××××¨××¨-×× ××¨××§××-×××§××.jpg" />
    ); 
    return (
        // className=""
        <div className="card flex justify-content-center">
            <Card title="  הצטרפו לאלפי לקוחות מרוצים" subTitle="לטעמי"  header={header} className="md:w-25rem">
              <Register role={'customer'}></Register>
            </Card>
        </div>
    )
}
