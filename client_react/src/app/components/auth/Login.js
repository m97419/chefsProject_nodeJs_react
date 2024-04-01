import React,{useEffect,useState} from "react";
import { useLoginMutation } from "./authApiSlice";
import { setToken } from "./authSlice";
import { UseDispatch, useDispatch } from "react-redux";
import { Form } from "react-router-dom";


const Login=()=>{
    const dispatch = useDispatch()
    const [loginFunc,{isError,error,isSuccess,data}] =useLoginMutation()


    useEffect(()=>{
        if(isSuccess){
            dispatch(setToken(data))
        }
    },[isSuccess])
    return(<Form>

        <input>hhhh</input>
        {/* //loginFunc({}) */}
    </Form>




    )
}
export default Login