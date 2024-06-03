import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import useAuth from "../auth/useAuth"
import { useGetAllCountriesQuery } from '../countries/countriesApiSlice';
import { useGetAllCategoriesQuery } from '../categories/categoryapiSlice';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';


import {
    useUpdateProductMutation, useDeleteProductMutation
    , useCreateNewProductMutation,
    useGetByChefQuery
} from './productsApiSlice';

import { Button } from 'primereact/button';
import CategoriesList from './CategoriesList';
import CountryList from './CountryList';
import { FileUpload } from 'primereact/fileupload';

export default function Table() {
    const { _id } = useAuth()
    let emptyProduct = {
        id: null,
        name: '',
    };
    const [productCreate, setProductCreate] = useState({
        name: "",
        category: [],
        country: "",
        chef: _id,
        price: 0

    });
    const [products, setProducts] = useState(null);
    const [cat, setCat] = useState(null);
    const { data: productsData = [], isLoading, isSuccess: isSuccessGet, isError: isErrorGet, error: errorGet, refetch } = useGetByChefQuery(_id);
    const [createNewProduct, { isError: isErrorCreate, error: errorCreate, isSuccess: isSuccessCreate, data: dataCreate }] = useCreateNewProductMutation()
    const [updateProduct, { isError, error, isSuccess, data }] = useUpdateProductMutation();
    const [deleteFunc] = useDeleteProductMutation();

    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [addProductDialog, setAddProductDialog] = useState(false);
    const { data: categoriesData = [], isLoadingcategories, isSuccessCategories } = useGetAllCategoriesQuery();
    const [categories, setCategories] = useState(null);
    const { data: countriesData = [], isSuccessCountries } = useGetAllCountriesQuery();;
    const [countries, setCountries] = useState(null);
    const [selectedPicture, setSelectedPicture] = useState(null);
    const [product, setProduct] = useState("");


    useEffect(() => {
        const _countriesData = countriesData.map(c => { return { name: c.name, id: c._id } });
        setCountries(_countriesData)
    }, [isSuccessCountries])



    useEffect(() => {
        const _categoriesData = categoriesData.map(c => { return { name: c.name, id: c._id } });
        setCategories(_categoriesData)
    }, [isSuccessCategories])


    useEffect(() => {
        if (isSuccessGet) {
            setProducts(productsData)
        }
    }, [isSuccessGet]);

    useEffect(() => {
        setProducts(productsData)
    }, [productsData]);

    const onRowEditComplete = async (e) => {
        let _products = [...products];
        let { newData, index } = e;
        _products[index] = newData;
        var category = cat
        if (cat == null)
            category = e.newData.category.map(e => e._id);
        const formData = new FormData();
        formData.append("_id", e.newData._id);
        formData.append("picture", selectedPicture);
        formData.append("name", e.newData.name);
        formData.append("category", category);
        formData.append("price", e.newData.price);

        try {
            updateProduct(formData);
        }
        catch { console.log(error); }

    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };
    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => { options.editorCallback(e.target.value) }} mode="currency" currency="USD" locale="en-US" />;
    };

    const categoryEditor = (options) => {
        return (
            <CategoriesList setCat={setCat} />
        );
    };

    const statusEditor = (options) => {
        return (
            <div className="card flex justify-content-center">
                <FileUpload name="demo[]" auto accept="image/*" maxFileSize={1000000000000000} emptyTemplate={<p className="m-0">upload picture</p>}
                    uploadLabel='&nbsp;העלאה' cancelLabel='&nbsp;ביטול' chooseLabel='choose &nbsp;'
                                customUpload uploadHandler={(e) => setSelectedPicture(e.files[0])}
                />

            </div>
        );
    };



    const statusBodyTemplate = (rowData) => {
        return <img src={`http://localhost:7788/uploads/${rowData.picture.split("\\")[2]}`} style={{ width: '150px' }} />
    };

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    };

    const allowEdit = (rowData) => {
        return rowData.name !== 'Blue Band';
    };
    const itemTemplateCategory = (item, options) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });
        return (
            <div className={className} >
                {item.name}
            </div>
        );
    };

    const categoriesArr = (rowData) => {
        const names = rowData.category.map(e => e.name)
        return (
            <VirtualScroller items={rowData.category} itemSize={50} itemTemplate={itemTemplateCategory} className="border-1 surface-border border-round" style={{ width: '200px', height: 0, minHeight: '70px' }} />
        )
    }



    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>

                <Button icon="pi pi-trash" rounded text onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };
    
    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const hideAddProductDialog = () => {
        setAddProductDialog(false);
    };

    const addProduct = () => {
        setAddProductDialog(true);
    };

    const confirmDeleteProduct = (product) => {
        setProduct({ id: product._id, name: product.name });
        setDeleteProductDialog(true);
    };

    const deleteProduct = () => {
        let _products = products.filter((val) => val.id !== product.id);
        setProducts(_products);
        deleteFunc({ id: product.id });
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
    };
    const addNewProduct = () => {
        const category = cat
        const formData = new FormData();
        formData.append("picture", selectedPicture);
        formData.append("name", productCreate.name);
        formData.append("category", cat);
        formData.append("country", productCreate.country);
        formData.append("chef", productCreate.chef);
        formData.append("price", productCreate.price);
        createNewProduct(formData);
        setAddProductDialog(false);
    };
    const handlename = (e) => {
        setProductCreate(prevState => ({
            ...prevState,
            name: e.target.value
        }))
    }

    const handlePrice = (e) => {
        setProductCreate(prevState => ({
            ...prevState,
            price: e.value
        }))
    }

    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" onClick={deleteProduct} />
        </React.Fragment>
    );
    const addProductDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideAddProductDialog} />
            {productCreate.name != null && productCreate.category != null &&
                productCreate.country != null && productCreate.price != null &&
                selectedPicture != null &&
                <Button label="Add" icon="pi pi-check" onClick={addNewProduct} />}
        </React.Fragment>
    );


    return (<>
        <Button
            variant="contained"
            onClick={addProduct}
            icon="pi pi-plus-circle" rounded
            style={{
                textAlign: "center",
                position: "fixed",
                bottom: "25px",
                left: "25px",
                zIndex: 1000,
                width: "300px",
                height: "50px"
            }}
        >
            Add Product
        </Button>

        <div className="card p-fluid">


            <DataTable value={products} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column body={categoriesArr} header="Category" editor={(options) => categoryEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="picture" header="Picture" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
                <Column header="Update" rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                <Column header="Delete" body={actionBodyTemplate} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>
            <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} footer={deleteProductDialogFooter} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal onHide={hideDeleteProductDialog}>
                {/*  */}
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && (
                        <span>
                            Are you sure you want to delete <b>{product.name}</b>?<br></br>
                        </span>

                    )}
                </div>
            </Dialog >
            <Dialog visible={addProductDialog} footer={addProductDialogFooter} onHide={hideAddProductDialog} >
                <div>
                    <InputText placeholder='name' onChange={handlename}></InputText><br></br><br></br>
                    <CategoriesList setCat={setCat} /><br></br>
                    <CountryList setProduct={setProductCreate} /><br></br>
                    <InputNumber placeholder='price' onChange={handlePrice}></InputNumber><br></br><br></br>
                    <div className="card flex justify-content-center">
                        <FileUpload name="demo[]" auto accept="image/*" maxFileSize={1000000000000000} emptyTemplate={<p className="m-0">upload picture</p>}
                            uploadLabel='&nbsp;העלאה' cancelLabel='&nbsp;ביטול' chooseLabel='choose &nbsp;'
                                    customUpload uploadHandler={(e) => setSelectedPicture(e.files[0])} />

                    </div>
                </div>
            </Dialog>
        </div>
    </>);
}


