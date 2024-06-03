
import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import useAuth from '../auth/useAuth';
import { useNavigate } from 'react-router';

export default function Msg({order}) {
    const {name}=useAuth();
    const navigate = useNavigate()
    const header = (

        <img alt="Card" src={`http://localhost:7788/uploads/${order?.details?.picture?.split("\\")[2]}`} />
    );
const handle=()=>{
    navigate("/orderscustomer")
}
    
    const footer = (
        <>
            <Button label="אשר" icon="pi pi-check" onClick={handle} />
           
        </>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title={`${name}`} subTitle="" footer={footer}  className="md:w-25rem">
                <p className="m-0">
                הזמנתך בוצעה בהצלחה
                </p>
            </Card>
        </div>
    )
}
        