import useAuth from "./components/auth/useAuth"

const  Gg=()=>{
    const {_id,name,role}=useAuth()
    console.log(role);
    return(<div>
        {name}
        {role}
    </div>)
}
export default Gg


import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function BasicDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
        