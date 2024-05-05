import React,{useEffect,useState} from "react";
import { useLoginMutation } from "./authApiSlice";
import { removeToken, setToken } from "./authSlice";
import { UseDispatch, useDispatch } from "react-redux";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Button } from "primereact/button";
import {useNavigate} from "react-router-dom"

const Login=()=>{
    const [user, setUser] = useState({
        name: "",
        password: ""
    })
    const [able, setAble] = useState(true)
    const dispatch = useDispatch()
    const [loginFunc,{isError,error,isSuccess,data}] =useLoginMutation()
    const navigate=useNavigate()
  useEffect(()=>{
        if(isSuccess){
            console.log(`data ${data.error}`);
            // dispatch(removeToken())
            dispatch(setToken(data))
            navigate(`/`)
        }
    },[isSuccess])
    const handlename = (e)=>{
        setUser(prevState => ({
            ...prevState,
            name: e.target.value}))
        if(e.target.value!="" && e.target.value!=null && user.password!="" && user.password!=null)
            setAble(false)
        else
            setAble(true) }
        const handlepassword=(e) => 
        {  setUser(prevState => ({
            ...prevState,
            password: e.target.value}))
            if(e.target.value!="" && e.target.value!=null && user.name!="" && user.name!=null)
            setAble(false)
        else
            setAble(true)}
        const handle=()=>{
          
            try{
               loginFunc(user)
  
            }
            catch{
                console.log(error);
            }
        }

    return( <div className="primereact/resources/themes/vela-orange/theme.css">
    <br></br><br></br>
       <InputText value={user.name} placeholder="name" onChange={handlename}></InputText>
       <br></br><br></br>
        <Password  placeholder="password" onChange={handlepassword}  />
        <br></br><br></br>
        <Button onClick={handle} disabled={able}  ></Button>
</div>

    )
}
export default Login
// value={user.password}