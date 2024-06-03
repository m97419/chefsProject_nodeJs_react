// import React,{useEffect,useState} from "react";
// import { useLoginMutation } from "./authApiSlice";
// import { removeToken, setToken } from "./authSlice";
// import { UseDispatch, useDispatch } from "react-redux";
// import { InputText } from "primereact/inputtext";
// import { Password } from 'primereact/password';
// import { Button } from "primereact/button";
// import {Link, useNavigate} from "react-router-dom"
// import { Divider } from 'primereact/divider';


// const LoginCopy=()=>{
//     const navigate=useNavigate()
// // const registerchef=()=>{ navigate(`/registerchef`)}
// // const registercustomer=()=>{ navigate(`/registercustomer`)}
// const [user, setUser] = useState({
//     name: "",
//     password: ""
// })

// const registerchef=()=>{ navigate(`/registerchef`)}
// const registercustomer=()=>{ navigate(`/registercustomer`)}
// // const Login=()=>{ navigate(`/login`)}
// const [able, setAble] = useState(true)
// const dispatch = useDispatch()
// const [loginFunc,{isError,error,isSuccess,data}] =useLoginMutation()
// useEffect(()=>{
//     if(isSuccess){
//         console.log(`data ${data.error}`);
//         // dispatch(removeToken())
//         dispatch(setToken(data))
//         navigate(`/`)
//     }
// },[isSuccess])
// // className="primereact/resources/themes/vela-orange/theme.css"
// const handlename = (e)=>{
//     setUser(prevState => ({
//         ...prevState,
//         name: e.target.value}))
//     if(e.target.value!="" && e.target.value!=null && user.password!="" && user.password!=null)
//         setAble(false)
//     else
//         setAble(true) }
//     const handlepassword=(e) => 
//     {  setUser(prevState => ({
//         ...prevState,
//         password: e.target.value}))
//         if(e.target.value!="" && e.target.value!=null && user.name!="" && user.name!=null)
//         setAble(false)
//     else
//         setAble(true)}
//     const handle=()=>{
      
//         try{
//             console.log(able);
//             if(able==false)
//            loginFunc(user)
//         //    console.log(error.data.message);
//         }
//         catch{
//             console.log("error");
//             console.log(error);
//         }
//     }
//     return(
//     <div className="g" >
        
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
//    <div class="signin">

//     <div class="content">
   
// <h2>sign in</h2>
//      <div class="form"  >

//       <div class="inputBox">
//         <InputText required onChange={handlename} ></InputText><i>Username</i>
//        {/* <input type="text" required> <i>Username</i> */}

//       </div>

//       <div class="inputBox">
//         <InputText type="password" required  onChange={handlepassword}   ></InputText> <i>Password</i> 
//        {/* <input type="password" required>*/}

//       </div>

//        <div class="links">    
   
//     <Link  to={"/registerchef"} >register chef</Link>
//     <Link  to={ `/registercustomer`}>register customer</Link>
//      {/* <a href="#">Forgot Password</a> <a href="#">Signup</a>  */}
//      {/* <Button>Sign In</Button> */}
//       </div>
      

//       <div class="inputBox">
        
// <Button  disabled={able}  onClick={()=>handle()}  >Sign In </Button>
//        {/* <input type="submit" value="Login"> */}
   
//       </div>

//      </div>

//     </div>

//    </div>

//   </section>

//   </div>
  
    
// )
// }
// export default LoginCopy;
