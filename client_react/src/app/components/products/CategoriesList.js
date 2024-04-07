import { useGetAllCategoriesQuery } from '../categories/categoryapiSlice';
import React, { useEffect, useState } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import { Button } from 'primereact/button';
// import AddCategory from '../categories/AddCategory';
import { Dialog } from 'primereact/dialog';
import { useCreateNewCategoryMutation } from '../categories/categoryapiSlice';
import { InputNumber } from "primereact/inputnumber"
import { InputText } from 'primereact/inputtext';

export default function CategoriesList({setProduct}) {
    const { data: categoriesData = [], isLoadingcategories, isSuccess, isError, error, refetch } = useGetAllCategoriesQuery();
    const [selectedCategories, setSelectedCategories] = useState(null);
    const [categories, setCategories] = useState(null);
    const [addCaegoryDialog, setAddCaegoryDialog] = useState(false);
    const [addFunc, { data: data = [], isLoading }] = useCreateNewCategoryMutation()
    const [category, setCategory] = useState({
        name: "",
        code: 0,
        description: ""

    });
    useEffect(() => {
        const _categoriesData = categoriesData.map(c => { return { name: c.name, id: c._id } });
        setCategories(_categoriesData)

    }, [isSuccess])
    const CaegoryDialog = () => {
        setAddCaegoryDialog(true)
    }
    const hideAddCaegoryDialog = () => {
        setAddCaegoryDialog(false)
        setCategories(null)
    }


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
    const handledescription = (e) => {
        setCategory(prevState => ({
            ...prevState,
            description: e.target.value
        }))
    }
    const handle = () => {
        try {
            console.log(category);
            addFunc(category);
            setAddCaegoryDialog(false)
        }
        catch {

        }
    }
    const product=(e)=>{
        
         setSelectedCategories(e.value);
        //  console.log(selectedCategories);
        //  console.log(`gval   ${e.value[0].name}`);
       
         const d= e.value?.map(e=>e.id)  
        //  console.log(`g delete${d}`);
         setProduct(prevState => ({
            ...prevState,
            category: d
        }))
        // console.log(product);
    }

    const addCategotyDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideAddCaegoryDialog} />
            <Button label="Add" icon="pi pi-check" onClick={handle} />
        </React.Fragment>
    );
    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedCategories} onChange={product} options={categories} optionLabel="name" display="chip"
             maxSelectedLabels={3}
   filter placeholder="Select Categories" className="w-full md:w-20rem" /> &nbsp;
            <Button onClick={CaegoryDialog}>AddCategory</Button>
            <Dialog visible={addCaegoryDialog} footer={addCategotyDialogFooter} onHide={hideAddCaegoryDialog}  >
                <div>
                    <InputText placeholder="name" onChange={handlename}></InputText><br></br><br></br>
                    <InputText placeholder='code' onChange={handlecode}></InputText><br></br><br></br>
                    <InputText placeholder="description" onChange={handledescription} ></InputText><br></br><br></br>
                </div>
            </Dialog>

        </div>
    )
}
// 

