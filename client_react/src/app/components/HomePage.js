import CountryList from "./countries/CountryList";
import React from "react";
// import { classNames } from "primereact/utils";
// import 'primereact/resources/themes/saga-orange/theme.css'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import {Link, useNavigate} from "react-router-dom"

export default function HomePage(){
    const navigate=useNavigate()
    const header = (
        <img alt="Card" className="picturesizebig" src="http://localhost:7788/uploads/iGXMZQcLnDgiEfAUqsThovRCdccKhHEwngRjWlZuZKEflWymazLlSaByRcfPgcBQ.webp" />
    ); 
    // picture-1712515003668-82244741×××××¨××¨-×× ××¨××§××-×××§××.jpg
    const headerChef = (
        <img alt="Card"  className="picturesizebig" src="http://localhost:7788/uploads/picture-1716725732875-803856635zcbnuiRTioRKxexAbgMynuvkEFcfyQuBIZHAsxbsRtkWAJRbBKWsIoQGyhUZCTVO.webp" />
    );
    const footer = (
        <>
            <Button label="לחץ עלי" icon="pi pi-check" onClick={()=>navigate('/registerCustomer')} />
            {/* <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} /> */}
        </>
    );

    const footerChef = (
        <>
            <Button label="לחץ עלי" icon="pi pi-check" onClick={()=>navigate('/registerChef')} />
            {/* <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} /> */}
        </>
    );

    return (
        // className=""
        <div className="card flex justify-content-center">
            <Card title="  הצטרפו לאלפי לקוחות מרוצים" subTitle="לטעמי" footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                כאן תוכלו לבצע הזמנות
                מנות בוטיק ,
                <br></br>
                 ששפים    
                מקצועיים יכינו במיוחד
                  עבורכם ,
                  <br></br>
                   בבחירה אישית
                לפי הטעם והסגנון
                    שאתם אוהבים . 
                    <br></br><br></br><br></br>
                </p>
            </Card>
            &nbsp; &nbsp; &nbsp;
            <Card title="הצטרפו לצוות השפים שלנו" subTitle="להיות חלק ממשהו גדול" footer={footerChef} header={headerChef} className="md:w-25rem">
                <p className="m-0">
                כאן תוכלו להציע
                ללקוחות שלכם 
               <br></br> 
                מנות
                מיוחדות ממיטב הסגנונות
                <br></br>
               מתוך הניסיון המיוחד
                שלכם,
                <br></br> 
                ומכאן תוכלו לקבל
                 מהם הזמנות
                 <br></br>
                  לפי העדפה
                    אישית שלהם . 
                </p>
            </Card>
        </div>
    )
}
