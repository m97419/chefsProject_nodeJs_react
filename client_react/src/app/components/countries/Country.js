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
import { Image } from 'primereact/image';
import { VirtualScroller } from 'primereact/virtualscroller';
import { Avatar } from 'primereact/avatar';

//import './assets/theme.css'


const Country = () =>{
    const {id} = useParams();
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
//  console.log(products[0].log(products[0].category[0].name);
//  console.chef);

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

const addItemToBusket= (product)=>{

    var products = localStorage.getItem("basket")
    products = products? JSON.parse(products) : []
    let flag= false
    products=products.map(prdct=>{
        if(prdct.id==product._id) {
            flag=true
            return {...prdct,count:prdct.count+1}
        }
        return prdct
    })
    if(!flag){
        products.push({id:product._id,details:product, count:1});
    }
    console.log(products, product);
    localStorage.setItem("basket",JSON.stringify(products))
}
const listItem = (product, index) => {
    return (
        <div className="col-12" key={product._id}>
            <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                <Image className="w-9 shadow-2 border-round" src={`http://localhost:7788/uploads/${product.picture.split("\\")[2]}`} alt={product.picture} preview />
                <div className="flex align-items-center gap-3">
                    <span className="flex align-items-center gap-2">
                        <Avatar icon={product.chef.picture || "pi pi-user"} size="large" shape="circle" />
                        <h5 >{product.chef.name}</h5>
                    </span>
                </div>
                <img className="picturesize" src={`http://localhost:7788/uploads/${product.picture.split("\\")[2]}`} alt={product.picture} />
                <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                        <div className="text-2xl font-bold text-900">{product.name}</div>
                        {/* <Rating value={product.rating} readOnly cancel={false}></Rating> */}
                    </div>
                    <VirtualScroller items={product.category} itemSize={50} itemTemplate={itemTemplateCategory} className="border-1 surface-border border-round" style={{ width: '200px', height: 0, minHeight: '70px' }} />
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
                        <Avatar icon={product.chef.picture || "pi pi-user"} size="large" shape="circle" />
                        <h5 >{product.chef.name}</h5>
                    </div>
                    <VirtualScroller items={product.category} itemSize={50} itemTemplate={itemTemplateCategory} className="border-1 surface-border border-round" style={{ width: '200px', height: 0, minHeight: '70px' }} />
                </div>
                <div className="flex flex-column align-items-center gap-3 py-5">
                    <br></br><br></br>
                    <Image  className="w-9 shadow-2 border-round"  src={`http://localhost:7788/uploads/${product.picture.split("\\")[2]}`} alt={product.name} />
                    <div className="text-2xl font-bold">{product.name}</div>
                </div>
                <div className="flex align-items-center justify-content-between">
                    <span className="text-2xl font-semibold">{product.price}</span>
                    <Button icon="pi pi-cart-plus" rounded text raised aria-label="Filter" onClick={()=>addItemToBusket(product)}></Button>
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