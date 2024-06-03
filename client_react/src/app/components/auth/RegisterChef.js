import CountryList from "../countries/CountryList";
import React, { useState } from "react";
import { classNames } from 'primereact/utils';
import 'primereact/resources/themes/saga-orange/theme.css'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Register from "./Register";

export default function RegisterChef(){
    const [image, setImage] =useState(null)
    const header = (
           <img alt="Card"  className="picturesizebig" src="http://localhost:7788/uploads/picture-1716725732875-803856635zcbnuiRTioRKxexAbgMynuvkEFcfyQuBIZHAsxbsRtkWAJRbBKWsIoQGyhUZCTVO.webp" />
    );
    return (
        // className=""
        <div className="card flex justify-content-center">
                <Card title="הצטרפו לצוות השפים שלנו" subTitle="להיות חלק ממשהו גדול"  header={header} className="md:w-25rem">

              <Register role={"chef"} ></Register>
            </Card>
        </div>
    )
}
