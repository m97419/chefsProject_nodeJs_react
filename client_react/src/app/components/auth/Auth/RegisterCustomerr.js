// import React, { useState,useEffect } from "react";
// import { Password } from 'primereact/password';
// import { AutoComplete } from "primereact/autocomplete";
// import { Button } from "primereact/button";
// import { InputText } from "primereact/inputtext";
// import 'primereact/resources/themes/vela-orange/theme.css'
// import { useRegisterCustomerMutation } from "./authApiSlice";
// import {useNavigate} from "react-router-dom"
// import { setToken } from "./authSlice";
// import { useDispatch } from "react-redux";
// export default function RegisterCustomer() {
//     const [registerFunc, { isError, isSuccess, isLoading, data, error }] = useRegisterCustomerMutation()
//     const navigate=useNavigate()
//     const [able, setAble] = useState(true)
//     const [user, setUser] = useState({
//         name: "",
//         password: "",
//         phone: "",
//         email: ""
//     })
//     const dispatch = useDispatch()
//     useEffect(()=>{
//         if(isSuccess){
//             console.log(`data ${data.error}`);
//             dispatch(setToken(data));
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
//         const handle = () => { console.log(user.name); 
//             try{
//     registerFunc(user)
// //    setToken(user)
// }
// catch{console.log(error);} }
//     return (
//         <div className="primereact/resources/themes/saga-orange/theme.css">
//              <div className="g" >
//         <section>
//             <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
//             <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
//             <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
//             <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
//              <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
//               <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
//                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
//                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
//                 <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
//                 <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
//                 <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
//                 <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
//                  <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
//                  <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
//                  <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
//              <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
// <span></span><span></span>
//    <div class="signin"  >

//     <div class="content">

// <h2>register</h2>
//      <div class="form">

//       <div class="inputBox">
//         <InputText required onChange={handlename} ></InputText><i>Username</i>
//        {/* <input type="text" required> <i>Username</i> */}

//       </div>

//       <div class="inputBox">
//         <InputText type="password" required  onChange={handlepassword}   ></InputText> <i>Password</i> 
//        {/* <input type="password" required>*/}

//       </div>
//       <div class="inputBox">
//       <InputText  onChange={(e) => {
//                 setUser(prevState => ({
//                     ...prevState,
//                     phone: e.target.value}));
//                  }}></InputText> <i>Phone</i> 

//       </div>
//       <div class="inputBox">
//       <InputText onChange={(e) => {
//                 setUser(prevState => ({
//                     ...prevState,
//                     email: e.target.value}))}}></InputText><i>Email</i> 

//       </div>

//        <div class="links"> 
   
//       </div>
      

//       <div class="inputBox">
        
// <Button type="submit" disabled={able} onClick={()=>handle()}  >Register </Button>
//        {/* <input type="submit" value="Login"> */}

//       </div>

//      </div>

//     </div>

//    </div>

//   </section> 
//   </div>
  
    

//         </div>
//     )
// }




