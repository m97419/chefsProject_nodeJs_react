import React, { useState, useEffect } from "react";
import { Password } from 'primereact/password';
import { AutoComplete } from "primereact/autocomplete";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import 'primereact/resources/themes/vela-orange/theme.css'
import { useRegisterChefMutation } from "./authApiSlice";
import { useNavigate } from "react-router-dom"
import { setToken } from "./authSlice";
import { useDispatch } from "react-redux";
import { FileUpload } from "primereact/fileupload";

export default function RegisterChef() {
    const [registerFunc, { isError, isSuccess, isLoading, data, error }] = useRegisterChefMutation()
    const navigate = useNavigate()
    const [able, setAble] = useState(true)
    const [able1, setAble1] = useState(true)
    const [user, setUser] = useState({
        name: "",
        password: "",
        phone: "",
        email: ""
    })
    const [selectedPicture, setSelectedPicture] = useState(null);
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
        if (e.target.value != "" && e.target.value != null && user.name != "" && user.name != null)
            setAble(false)
        else
            setAble(true)
    }
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
        <div className="primereact/resources/themes/saga-orange/theme.css">
            <br></br><br></br>
            <InputText className="w-4" value={user.name} placeholder="name" onChange={handlename}></InputText>
            <br></br><br></br>
            <Password  toggleMask style={{width:"33.3%"}}   value={user.password} placeholder="password" onChange={handlepassword}  />
            <br></br><br></br>
            <InputText className="w-4" value={user.phone} placeholder="phone" onChange={(e) => {
                setUser(prevState => ({
                    ...prevState,
                    phone: e.target.value
                }));
            }}></InputText>
            <br></br><br></br>
            <InputText className="w-4" value={user.email} placeholder="email" onChange={(e) => {
                setUser(prevState => ({
                    ...prevState,
                    email: e.target.value
                }))
            }}></InputText>
            <br></br><br></br>
            <div className="card flex justify-content-center" >
                <FileUpload style={{width:"33.3%"}}  name="demo[]" auto accept="image/*" maxFileSize={1000000000000000} emptyTemplate={<p className="m-0">upload picture</p>}
                    uploadLabel='&nbsp;העלאה' cancelLabel='&nbsp;ביטול' chooseLabel='choose &nbsp;'
                                   /**/ customUpload uploadHandler={(e) => setSelectedPicture(e.files[0])} />

            </div>

            <Button onClick={handle} disabled={able}  ></Button>
        </div>
    )
}




