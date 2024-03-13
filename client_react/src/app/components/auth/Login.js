import React,{useEffect,useState} from "react";
import { useLoginMutation } from "./authApiSlice";
import { setToken } from "./authSlice";
import { UseDispatch, useDispatch } from "react-redux";


const Login=()=>{
    const dispatch = useDispatch()
    const [loginFunc,{isError,error,isSuccess,data}] =useLoginMutation()


    useEffect(()=>{
        if(isSuccess){
            dispatch(setToken(data))
        }
    },[isSuccess])
}