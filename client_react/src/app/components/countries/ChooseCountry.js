import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';
import { useGetAllChefsQuery } from '../chefs/chefsApiSlice';
import CountryNew from './CountryNew';
import { useNavigate } from 'react-router';
import { useGetAllCountriesQuery } from './countriesApiSlice';
export default function ChooseCountry() {
    const [products, setProducts] = useState([]);
    const [layout, setLayout] = useState('grid');
    const { data: productsData = [], isLoading, isSuccess, isError, error, refetch } = useGetAllCountriesQuery()

    const navigate=useNavigate()
    useEffect(() => {
        setProducts(productsData);
    }, [isSuccess]);

    const handle=(country)=>{
       navigate(`/countrynew/country=${country}`)
   
    }

    const listItem = (product, index) => {
        return (
            <div className="col-12" key={product.id}>
                <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                    <img className="picturesizebig"src={`http://localhost:7788/uploads/${product.pictures[0]}`} alt={product.name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.name}</div>
                        </div>
                        <Button onClick={()=>handle(product)}></Button>
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
                        </div>
                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-5">
                        <img className="picturesizebig" src={`http://localhost:7788/uploads/${product.pictures[0]}`} alt={product.name} />
                        <Button onClick={()=>handle(product._id)}></Button>
                        <div className="text-2xl font-bold">{product.name}</div>
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
