import 'primereact/resources/themes/saga-orange/theme.css'
import{useParams} from "react-router-dom"
import { useGetByCountryQuery } from "../products/productsApiSlice";
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';
import 'primeicons/primeicons.css';

//import './assets/theme.css'


const Country = () =>{
    const {id} = useParams();
    console.log(id);
    const { data: productsData = [], isLoading, isSuccess, isError, error, refetch } =useGetByCountryQuery(id)
//--------------------------------------//
const [products, setProducts] = useState([]);
const [layout, setLayout] = useState('grid');


//const {data:countries=[],isLoading,isSuccess,isError,error,refetch} = useGetAllCountriesQuery()

// useEffect(() => {
//     ProductService.getProducts().then((data) => setProducts(data.slice(0, 12)));
// }, []);

useEffect(() => {
    if(isSuccess)
    setProducts(productsData);
}, [isSuccess]);
//  console.log(products[0].category[0].name);
//  console.log(products[0].chef);
const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};
const addItemToBusket= (product)=>{

    var products = localStorage.getItem("basket")
    products = products? JSON.parse(products) : []
    products.push(product);
    console.log(products, product);
    localStorage.setItem("basket",JSON.stringify(products))
}
const listItem = (product, index) => {
    return (
        <div className="col-12" key={product._id}>
            <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                <img className="picturesize" src={`http://localhost:7788/${product.picture}`} alt={product.picture} />
                <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                        <div className="text-2xl font-bold text-900">{product.name}</div>
                        {/* <Rating value={product.rating} readOnly cancel={false}></Rating> */}
                        <div className="flex align-items-center gap-3">
                            <span className="flex align-items-center gap-2">
                                <i className="pi pi-tag"></i>
                                <span className="font-semibold">{product.category[0].name}</span>
                            </span>
                            <Tag value={product.country} severity={getSeverity(product)}></Tag>
                        </div>
                    </div>
                    <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                        <span className="text-2xl font-semibold">${product.price}</span>
                        <br></br>
                        {/* <Button icon="pi-cart-plus"  rounded text raised aria-label="Filter" onClick={()=>addItemToBusket(product)}/> */}
                        <br></br>
                        <br></br>
                        {/* <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

const gridItem = (product) => {
    return (
        <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product._id}>
            <div className="p-4 border-1 surface-border surface-card border-round">
                <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                    <div className="flex align-items-center gap-2">
                        <i className="pi pi-tag"></i>
                        <span className="font-semibold">{product.category[0].name}</span>
                    </div>
                  
                    <Tag color="red" value={product.category[0].name} severity={getSeverity(product)}></Tag>
                </div>
                <div className="flex flex-column align-items-center gap-3 py-5">
                    <img className="picturesize" src={`http://localhost:7788/${product.picture}`} alt={product.name} />
                    <div className="text-2xl font-bold">{product.name}</div>
                    <Rating value={product.rating} readOnly cancel={false}></Rating>
                </div>
                <div className="flex align-items-center justify-content-between">
                    <span className="text-2xl font-semibold">{product.price}</span>
                    <Button icon="pi-cart-plus" rounded text raised aria-label="Filter" />
                    {/* <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button> */}
                </div>
            
            </div>
        </div>
    );
};

const itemTemplate = (product, layout, index) => {
    if (!product) {
        return;
    }

    if (layout === 'list') return listItem(product, index);
    else if (layout === 'grid') return gridItem(product);
};

const listTemplate = (products, layout) => {
    return <div className="grid grid-nogutter">{products.map((product, index) => itemTemplate(product, layout, index))}</div>;
};

    const header = () => {
        return (
            <div className="flex justify-content-end">
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        );
};

//===========================
return(
    <div className="card">
        <div>{id}</div>
    <DataView value={products} listTemplate={listTemplate} layout={layout} header={header()} />
</div>  
)


}





export default Country