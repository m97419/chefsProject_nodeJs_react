import { jwtDecode } from "jwt-decode"

const useAuth = ()=>{
    
    const token = localStorage.getItem("token")//useSelector(selectToken)
    let customer = false
    let chef = false
    if(token){
        const userDecode = jwtDecode(token)
        // console.log('userDecode',userDecode);
        const {_id,name,email,phone,role} = userDecode
       // isAdmin = roles === "Admin"
        //isUser = roles === "User"
        console.log("token"+_id);
        return {_id,name,email,phone,role}
    }
    return {_id:"",name:"",email:"",phone:"",role:""}

}
export default useAuth