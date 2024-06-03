import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';
import { useGetBasketByCustomerQuery } from '../basket/basketApiSlice';
import useAuth from '../auth/useAuth';
import { Avatar } from 'primereact/avatar';
export default function OrdersCustomer() {
    const [products, setProducts] = useState([]);
    const [layout, setLayout] = useState('grid');
    const {_id} = useAuth()
   console.log(_id);
   const { data: ordersData = [], isLoading, isSuccess, isError, error, refetch } =useGetBasketByCustomerQuery(_id)
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        setProducts(ordersData)
    }, [isSuccess,ordersData]);
   

    const listItem = (product, index) => {
        return (
            <div className="col-12" key={product.id}>
                <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`http://localhost:7788/uploads/${product.products.picture.split("\\")[2]}`} alt={product.name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                        
                            <div className="text-2xl font-bold text-900">{product.products.name}</div>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <span className="font-semibold">{product.name}</span>
                                </span>
                            </div>
                        </div>
                        <span className="text-2xl font-semibold">${product.products.price*product.count }</span>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            
                            <span className="text-2xl font-bold">{product.customer?.name}</span>
                        <span className="text-2xl font-bold">{product.customer?.email}</span>
                        <span className="text-2xl font-bold">{product.customer?.phone}</span>
                        { product.done!=true && <Button icon="pi pi-lock-open" rounded text raised  aria-label="Filter"  ></Button>}
                        { product.done==true && <Button icon="pi pi-lock" rounded text raised  aria-label="Filter"  ></Button>}

                           
                        </div>
                        <span className="text-2xl font-semibold">quantity:{product.count }</span>
                        <span className="text-2xl font-semibold">{product.createdAt.split("T")[0]}</span>
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
                        { product.done!=true && <Button icon="pi pi-lock-open" rounded text raised  aria-label="Filter"  ></Button>}
                        { product.done==true && <Button icon="pi pi-lock" rounded text raised  aria-label="Filter"  ></Button>}
                            <span className="font-semibold">{product.category}</span>
                        </div>
                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-5">
                        <img className="w-9 shadow-2 border-round" src={`http://localhost:7788/uploads/${product.products.picture.split("\\")[2]}`}  alt={product.name} />
                        <div className="text-2xl font-bold">{product.products.name}</div>
                        <span className="text-2xl font-bold">{product.customer?.name}</span>
                        <span className="text-2xl font-bold">{product.customer?.email}</span>
                        <span className="text-2xl font-bold">{product.customer?.phone}</span>

                    </div>
                    <div className="text-2xl font-semibold">quantity:{product.count }</div>
                    <span className="text-2xl font-semibold">{product.createdAt.split("T")[0]}</span>
                    <div className="flex align-items-center justify-content-between">
                        <span className="text-2xl font-semibold">${product.products.price*product.count }</span>
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
        