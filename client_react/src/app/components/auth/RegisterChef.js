import CountryList from "../countries/CountryList";
import React, { useState } from "react";
import { classNames } from 'primereact/utils';
import 'primereact/resources/themes/saga-orange/theme.css'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Register from "./Register";

export default function RegisterChef() {
    const [registerFunc, { isError, isSuccess, isLoading, data, error }] = useRegisterChefMutation()
    const navigate = useNavigate()
    const [able, setAble] = useState(true)
    const [able1, setAble1] = useState(true)
    const [selectedPicture,setSelectedPicture]= useState(null)
    const [user, setUser] = useState({
        name: "",
        password: "",
        phone: "",
        email: ""
    })
    // const handle = () => {
    //     console.log(user.name);
    //     const formData = new FormData();
    //         formData.append("name", user.name);
    //         formData.append("password", user.password);
    //         formData.append("phone", user.phone);
    //         formData.append("email", user.email);
    //         formData.append("picture", selectedPicture);
        
    //     try {
    //        const r = registerFunc(formData)
    //     //    console.log("r.status"+r.);
    //            setToken(user)
    //         //    return res.status(409).json({message:'Duplicate name'})
    //     }
    //     catch { console.log("error"+error); }}
    const dispatch = useDispatch()
    useEffect(() => {
        if (isSuccess) {
            console.log(`data ${data.error}`);
            dispatch(setToken(data))
            navigate(`/`)
        }
    }, [isSuccess])
    const handlename = (e) => {
        setUser(prevState => ({
            ...prevState,
            name: e.target.value
        }))
        if (e.target.value != "" && e.target.value != null && user.password != "" && user.password != null)
            setAble(false)
        else
            setAble(true)
    }
    const handlepassword = (e) => {
        setUser(prevState => ({
            ...prevState,
            password: e.target.value
        }))
        if (e.target.value != "" && e.target.value != null && user.name != "" && user.name != null && selectedPicture!=null)
        if (e.target.value != "" && e.target.value != null && user.name != "" && user.name != null && selectedPicture!=null)
            setAble(false)
        else
            setAble(true)
    }
 
  const check=()=>  {if (user.password != "" && user.password != null && user.name != "" && user.name != null && selectedPicture!=null)
            setAble(false)
        else
            setAble(true)}
    const handle = () => {
        console.log(user.name);
        const formData = new FormData();
            formData.append("name", user.name);
            formData.append("password", user.password);
            formData.append("phone", user.phone);
            formData.append("email", user.email);
            formData.append("picture", selectedPicture);
        
        try {
           const r = registerFunc(formData)
        //    console.log("r.status"+r.);
               setToken(user)
            //    return res.status(409).json({message:'Duplicate name'})
        }
        catch { console.log("error"+error); }
    }
    return (
        // className=""
        <div className="card flex justify-content-center">
                <Card title="הצטרפו לצוות השפים שלנו" subTitle="להיות חלק ממשהו גדול"  header={header} className="md:w-25rem">

              <Register role={"chef"} ></Register>
            </Card>
        </div>
    )
}
