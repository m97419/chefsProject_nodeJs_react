import React,{useEffect,useState} from "react";
import { useRegisterMutation } from "./authApiSlice";
import React, {useRef, useState } from 'react';

const Register=()=>{
   const [registerFunc,{isError,isSuccess,isLoading,data,error}] =  useRegisterMutation()
   const[formData,setFormData] = useState({
      name:"",
      password:"",
      email:"",
      phone:""
   })
   const handleChange=(e)=>{
      
   }
   useEffect(()=>{
      if(isSuccess)
      alert("isSuccess ")
   },[isSuccess])
   return(
      <div>
         <input></input>


      </div>
   )
   
}
export default Register;