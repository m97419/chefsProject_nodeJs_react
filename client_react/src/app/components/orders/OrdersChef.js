import React, { useState, useEffect } from 'react';
// import { ProductService } from './service/ProductService';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';
import { useGetBasketByChef1Query,useCompleteBasketMutation } from '../basket/basketApiSlice';
import { Avatar } from 'primereact/avatar';
import useAuth from '../auth/useAuth';
export default function OrdersChef() {
    const [products, setProducts] = useState([]);
    const [layout, setLayout] = useState('grid');
    // const { data: ordersData = [], isLoading, isSuccess, isError, error, refetch } =useGetAllOrdersQuery()
    const {_id} = useAuth()
   console.log(_id);
    const { data: ordersData = [], isLoading, isSuccess, isError, error, refetch } =useGetBasketByChef1Query(_id)
    const [updateFunc,{isError:isError1,error:error1,isSuccess:isSuccess1,data}]=useCompleteBasketMutation();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        setProducts(ordersData)
        console.log(ordersData);
    }, [isSuccess]);
    useEffect(() => {
        setProducts(ordersData)
        console.log(ordersData);
    }, [ordersData]);
    console.log("ttt");
    const listItem = (product, index) => {
        console.log("product.done",product.done!=true );
        return (
            <div className="col-12" key={product.id}>
                <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`http://localhost:7788/uploads/${product.products.picture.split("\\")[2]}`} alt={product.name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                        
                            <div className="text-2xl font-bold text-900">{product.products.name}</div>
                            {/* <Avatar icon="pi-lock-open" size="xlarge" shape="circle" /> */}
                            {/* < i className="pi-lock-open"></i> */}
                            {/*  */}
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                              { product.done!=true && <Button icon="pi pi-lock-open" rounded text raised  aria-label="Filter" 
                                   onClick={()=>updateFunc(product._id) }></Button>}
                                   { product.done==true && <Button icon="pi pi-lock" rounded text raised  aria-label="Filter"  ></Button>}
                                    {/* <i className="pi pi-tag"></i> */}
                                    <span className="font-semibold">{product.name}</span>
                                    <span className="font-semibold">{product.done}</span>
                                </span>
                            </div>
                        </div>
                        <span className="text-2xl font-semibold">${product.products.price*product.count }</span>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                        <Avatar icon='pi pi-user'   size="large" shape="circle" />
                            <span className="text-2xl font-bold">{product.customer?.name}</span>
                        <span className="text-2xl font-bold">{product.customer?.email}</span>
                        <span className="text-2xl font-bold">{product.customer?.phone}</span>
                           
                            {/* <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button> */}
                        </div>
                        <span className="text-2xl font-semibold">quantity:{product.count }</span>
                        {/* <span className="text-2xl font-semibold">{product.createdAt.split("T")[0]}</span> */}

                        <span className="text-2xl font-semibold">{product.createdAt.split("T")[0]}</span>
                        <Avatar icon='pi pi-calendar'   size="large" shape="circle" />

                        <span className="text-2xl font-semibold">{product.done==false}</span>

                    </div>
                </div>
            </div>
        );
    };

    const gridItem = (product) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                    
                        { product.done!=true && <Button icon="pi pi-lock-open" rounded text raised  aria-label="Filter" 
                                   onClick={()=>updateFunc(product._id) }
                                   ></Button>}
                                   { product.done==true && <Button icon="pi pi-lock" rounded text raised  aria-label="Filter"  ></Button>}

                            <span className="font-semibold">{product.category}</span>
          
                        </div>
                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-5">
                        <img className="w-9 shadow-2 border-round" src={`http://localhost:7788/uploads/${product.products.picture.split("\\")[2]}`}  alt={product.name} />
                        <div className="text-2xl font-bold">{product.products.name}</div>
                        <Avatar icon='pi pi-user'   size="large" shape="circle" />
                        <span className="text-2xl font-bold">{product.customer?.name}</span>
                        <span className="text-2xl font-bold">{product.customer?.email}</span>
                        <span className="text-2xl font-bold">{product.customer?.phone}</span>

                    </div>
                    <div className="text-2xl font-semibold">quantity:{product.count }</div>
                    <Avatar icon='pi pi-calendar'   size="large" shape="circle" />
<br/>
                    <span className="text-2xl font-semibold">{product.createdAt.split("T")[0]}</span>
                    <span className="text-2xl font-semibold">{product.done}</span>
                  
                    <div className="flex align-items-center justify-content-between">
                        <span className="text-2xl font-semibold">${product.products.price*product.count }</span>
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

    return (
        <div className="card">
            <DataView value={products} listTemplate={listTemplate} layout={layout} header={header()} />
        </div>
    )
}
        