import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
// import { Dropdown } from 'primereact/dropdown';
import { classNames } from 'primereact/utils';
import { InputNumber } from 'primereact/inputnumber';
import BasketItem from './BasketItem';

export default function Basket() {
    // const [sortKey, setSortKey] = useState('');
    // const [sortOrder, setSortOrder] = useState(0);
    // const [sortField, setSortField] = useState('');
    // const sortOptions = [
    //     { label: 'Price High to Low', value: '!price' },
    //     { label: 'Price Low to High', value: 'price' }
    // ];

    const getBasket = () => {
        const myBasket = JSON.parse(localStorage.getItem("basket"))

        if (!myBasket)
            return []
        return myBasket;
    }

    const [basket, setBasket] = useState(getBasket())

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

    const refetch = () => {
        setBasket(getBasket());
    }

    const listTemplate = (items) => {
        if (!items || items.length === 0) return null;
        let list = items.map((product, index) => {
            return <BasketItem product={product} index={index} refetch={refetch}/>;
        });
        return <div className="grid grid-nogutter">{list}</div>;
    };

    const order = () => {
        //do order- api
        localStorage.setItem("basket",JSON.stringify([]))
        refetch()
    }

    return (
        <div className="card">
            <DataView value={basket} listTemplate={listTemplate}/> <br/>
            <Button icon="pi pi-credit-card" disabled={basket==[]} raised aria-label="Filter" onClick={order}>&nbsp; to paying </Button>
            {/* header={header()} sortField={sortField} sortOrder={sortOrder} /> */}
        </div>
    )
}
        