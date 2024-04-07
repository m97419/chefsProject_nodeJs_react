import { Button } from "primereact/button"
import { useCreateNewCategoryMutation } from "./categoryapiSlice"
import { InputText } from "primereact/inputtext"
import { InputNumber } from "primereact/inputnumber"
import { useState } from "react"
import { Dialog } from "primereact/dialog"

export default function AddCategory() {
    const [addFunc, { data: data = [], isLoading, isSuccess, isError, error, refetch }] = useCreateNewCategoryMutation()
    const [category, setCategory] = useState({
        name: "",
        code: 0,
        description: ""

    });
   
    const handlename = (e) => {
        setCategory(prevState => ({
            ...prevState,
            name: e.target.value
        }))
    };
    const handlecode = (e) => {
        setCategory(prevState => ({
            ...prevState,
            code: e.target.value
        }))
    };
    const handledescription= (e) => {
        setCategory(prevState => ({
            ...prevState,
            description: e.target.value
        }))
    }
    const handle = () => {
        try {
            console.log(category);
            addFunc(category);
        }
        catch {

        }
    }

    return (
    <div>
        <InputText placeholder="name" onChange={handlename}></InputText><br></br><br></br>
        <InputText placeholder='code' onChange={handlecode}></InputText><br></br><br></br>
        <InputText placeholder="description" onChange={handledescription} ></InputText><br></br><br></br>
        <Button onClick={handle}>Add</Button>
    </div>
    )
}