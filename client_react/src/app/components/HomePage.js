import CountryList from "./countries/CountryList";

export default function HomePage(){

    const {_id,name,role}=useAuth()
    return(
        <div>
            Home Page
            <CountryList/>
        </div>
    )
}