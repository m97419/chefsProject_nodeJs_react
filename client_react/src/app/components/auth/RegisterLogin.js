import { Button } from "primereact/button"
import {useNavigate} from "react-router-dom"
export default function RegisterLogin(){
    const navigate=useNavigate()
    const registerchef=()=>{ navigate(`/registerchef`)}
    const registercustomer=()=>{ navigate(`/registercustomer`)}
    const Login=()=>{ navigate(`/login`)}
    return(
        
        <div>
            <br></br> <br></br> <br></br>
    <Button  onClick={registerchef} >Register Chef</Button>&nbsp;&nbsp;&nbsp;
    <Button icon="pi pi-user" onClick={registercustomer}>&nbsp;&nbsp;Register Customer</Button>&nbsp;&nbsp;&nbsp;
    <Button onClick={Login}>Login</Button>
    </div>
)}