import { jwtDecode } from "jwt-decode"

const useAuth = ()=>{
    const token = localStorage.getItem("token")
    let customer = false
    let chef = false
    if(token){
        const userDecode = jwtDecode(token)
        const {_id,name,email,phone,role} = userDecode
        return {_id,name,email,phone,role}
    }
    return {_id:"",name:"",email:"",phone:"",role:""}

}
export default useAuth