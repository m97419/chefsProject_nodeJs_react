import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
// import { Dropdown } from 'primereact/dropdown';
import { classNames } from 'primereact/utils';

export default function Basket() {
    // const [sortKey, setSortKey] = useState('');
    // const [sortOrder, setSortOrder] = useState(0);
    // const [sortField, setSortField] = useState('');
    // const sortOptions = [
    //     { label: 'Price High to Low', value: '!price' },
    //     { label: 'Price Low to High', value: 'price' }
    // ];

    const getBasket = () => {
        const basket = JSON.parse(localStorage.getItem("basket"))

        if (!basket)
            return []
        return basket;
    }

    // const onSortChange = (event) => {
    //     const value = event.value;

    //     if (value.indexOf('!') === 0) {
    //         setSortOrder(-1);
    //         setSortField(value.substring(1, value.length));
    //         setSortKey(value);
    //     } else {
    //         setSortOrder(1);
    //         setSortField(value);
    //         setSortKey(value);
    //     }
    // };

    // const header = () => {
    //     return <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange} className="w-full sm:w-14rem" />;
    // };

    const itemTemplate = (product, index) => {
        return (
            <div className="col-12" key={product._id}>
                <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round picturesize" src={`http://localhost:7788/${product.picture}`} alt={product.name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.name}</div>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    {/* <span className="font-semibold">{product.category[0].name}</span> */}
                                </span>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">${product.price}</span>
                            <Button icon="pi pi-plus" text raised ></Button> &nbsp; &nbsp;
                            <Button icon="pi pi-minus" text raised ></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const listTemplate = (items) => {
        if (!items || items.length === 0) return null;

        let list = items.map((product, index) => {
            return itemTemplate(product, index);
        });
        return <div className="grid grid-nogutter">{list}</div>;
    };

    return (
        <div className="card">
            <DataView value={getBasket()} listTemplate={listTemplate}/> 
            {/* header={header()} sortField={sortField} sortOrder={sortOrder} /> */}
        </div>
    )
}
        