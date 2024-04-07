import useAuth from "./auth/useAuth"
export default function HomePage(){

    const {_id,name,role,picture}=useAuth()
    return(
        <div>
            <br></br>
            Homepage
            <br></br>
            {_id}
            <br></br>
            {name}
            <br></br>
            {role}   
            <img src={`http://localhost:7788/uploads/${picture.split("\\")[2]}`}></img>
          
        </div>
     
    )
}