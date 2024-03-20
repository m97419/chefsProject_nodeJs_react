import React,{useEffect,useState,useRef} from "react";
import {useRegisterCustomerMutation } from "./authApiSlice";
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';

const Register=()=>{
   const [value, setValue] = useState('');
   const [registerFunc,{isError,isSuccess,isLoading,data,error}] =  useRegisterCustomerMutation()
   const[formData,setFormData] = useState({
      name:"",
      password:"",
      email:"",
      phone:""
   })
   const handleChange=(e)=>{
      registerFunc(formData)
   }
   useEffect(()=>{
      if(isSuccess)
      alert("isSuccess ")
   },[isSuccess])
   return(
      <div>
         { <div className="card flex justify-content-center">
            <Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
        </div>}
        

{/* <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
    <div className="mb-2">Value</div>
    <Toast ref={toast} />
    <AutoComplete
   
        id="item"
        name="item"
        value={formik.values.item}
        suggestions={items}
        completeMethod={search}
        onChange={(e) => {
            formik.setFieldValue('item', e.value);
        }}
    />
    {getFormErrorMessage('item')}
    <Button type="submit" label="Submit" className="mt-2" />
</form> */}
         

         <Button onClick={handleChange}></Button>


      </div>
   )
   
}
export default Register;