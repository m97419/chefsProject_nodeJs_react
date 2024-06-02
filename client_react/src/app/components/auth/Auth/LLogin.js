// import React,{useEffect,useState} from "react";
// import { useLoginMutation } from "./authApiSlice";
// import { removeToken, setToken } from "./authSlice";
// import { UseDispatch, useDispatch } from "react-redux";
// import { InputText } from "primereact/inputtext";
// import { Password } from 'primereact/password';
// import { Button } from "primereact/button";
// import {useNavigate} from "react-router-dom"
// import { Divider } from 'primereact/divider';
// const LLogin=()=>{
//     const [user, setUser] = useState({
//         name: "",
//         password: ""
//     })
//     const navigate=useNavigate()
//     const registerchef=()=>{ navigate(`/registerchef`)}
//     const registercustomer=()=>{ navigate(`/registercustomer`)}
//     // const Login=()=>{ navigate(`/login`)}
//     const [able, setAble] = useState(true)
//     const dispatch = useDispatch()
//     const [loginFunc,{isError,error,isSuccess,data}] =useLoginMutation()
//   useEffect(()=>{
//         if(isSuccess){
//             console.log(`data ${data.error}`);
//             // dispatch(removeToken())
//             dispatch(setToken(data))
//             navigate(`/`)
//         }
//     },[isSuccess])
//     const handlename = (e)=>{
//         setUser(prevState => ({
//             ...prevState,
//             name: e.target.value}))
//         if(e.target.value!="" && e.target.value!=null && user.password!="" && user.password!=null)
//             setAble(false)
//         else
//             setAble(true) }
//         const handlepassword=(e) => 
//         {  setUser(prevState => ({
//             ...prevState,
//             password: e.target.value}))
//             if(e.target.value!="" && e.target.value!=null && user.name!="" && user.name!=null)
//             setAble(false)
//         else
//             setAble(true)}
//         const handle=()=>{
          
//             try{
//                loginFunc(user)
  
//             }
//             catch{
//                 console.log(error);
//             }
//         }
// // className="primereact/resources/themes/vela-orange/theme.css"
//     return( <div >
//     <br></br><br></br>
//        <InputText value={user.name} placeholder="name" onChange={handlename}></InputText>
//        <br></br><br></br>
//         <Password  placeholder="password" onChange={handlepassword}  />
//         <br></br><br></br>
//         <Button onClick={handle} disabled={able}  ></Button>
//         <br></br><br></br>

//         <Button  onClick={registerchef} >Register Chef</Button>&nbsp;&nbsp;&nbsp;
//         <br></br><br></br>
//     <Button icon="pi pi-user" onClick={registercustomer}>&nbsp;&nbsp;Register Customer</Button>&nbsp;&nbsp;&nbsp;

//     <div className="card">
//             <div className="flex flex-column md:flex-row">
//                 <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
//                     <div className="flex flex-wrap justify-content-center align-items-center gap-2">
//                         <label className="w-6rem">Username</label>
//                         <InputText id="username" type="text" className="w-12rem" />
//                     </div>
//                     <div className="flex flex-wrap justify-content-center align-items-center gap-2">
//                         <label className="w-6rem">Password</label>
//                         <InputText id="password" type="password" className="w-12rem" />
//                     </div>
                    
//                     <Button label="Login" icon="pi pi-user" className="w-10rem mx-auto"></Button>
//                 </div>
//                 <div className="w-full md:w-2">
//                     <Divider layout="vertical" className="hidden md:flex">
//                         <b>OR</b>
//                     </Divider>
//                     <Divider layout="horizontal" className="flex md:hidden" align="center">
//                         <b>OR</b>
//                     </Divider>
//                 </div>
//                 <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
//                 <div className="flex flex-wrap justify-content-center align-items-center gap-2">
//                 <Button label="Register Chef" icon="pi pi-user"  onClick={registerchef} className="w-10rem mx-auto"></Button>
//                     </div>
//                     <div className="flex flex-wrap justify-content-center align-items-center gap-2">
//                     <Button label="Register Customer" icon="pi pi-user" onClick={registercustomer} className="w-10rem mx-auto"></Button>
//                     </div>
//                 <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
               
//                 </div>
//                 <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                
//                 </div>
//         {/* <Button  onClick={registerchef} >Register Chef</Button> */}
//         <br></br><br></br>
//     {/* <Button icon="pi pi-user" onClick={registercustomer}> */}
//         {/* &nbsp;&nbsp;Register Customer</Button>&nbsp;&nbsp;&nbsp; */}
//                     {/* <Button label="Sign Up" icon="pi pi-user-plus" severity="success" className="w-10rem"></Button> */}
//                 </div>
//             </div>
//         </div>

// </div>

//     )
// }
// export default LLogin
// // value={user.password}