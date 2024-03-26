import useAuth from "./components/auth/useAuth"

const  Gg=()=>{
    const {_id,name,role}=useAuth()
    console.log(role);
    return(<div>
        {name}
        {role}
    </div>)
}
export default Gg