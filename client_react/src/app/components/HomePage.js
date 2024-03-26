import useAuth from "./auth/useAuth"
export default function HomePage(){

    const {_id,name,role}=useAuth()
    return(
        <div>
            <br></br>
            Homepage
            <br></br>
            {name}
            <br></br>
            {role}
        </div>
    )
}