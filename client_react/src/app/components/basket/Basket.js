import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
// import { Dropdown } from 'primereact/dropdown';
import { classNames } from 'primereact/utils';
import { InputNumber } from 'primereact/inputnumber';
import BasketItem from './BasketItem';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

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
    const [empty, setEmpty] = useState(basket==[])
    const [orderVisible, setOrderVisible] = useState(false)

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
        setEmpty(basket==[]);
    }

    const listTemplate = (items) => {
        if (!items || items.length === 0) return null;
        let list = items.map((product, index) => {
            return <BasketItem product={product} index={index} refetch={refetch}/>;
        });
        return <div className="grid grid-nogutter">{list}</div>;
    };

    const order = async () => {
        //do order- api
        await localStorage.setItem("basket",JSON.stringify([]))
        refetch()
    }

    return (
        <div className="card"><br/><br/>
            <DataView value={basket} listTemplate={listTemplate}/> <br/>
            <Button icon="pi pi-credit-card" disabled={empty} raised aria-label="Filter" onClick={()=>setOrderVisible(true)}>&nbsp; to paying </Button>
            {/* header={header()} sortField={sortField} sortOrder={sortOrder} /> */}
            <Dialog
            className='w-3'
                visible={orderVisible}
                modal
                onHide={() => setOrderVisible(false)}
                content={({ hide }) => (
                    <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>
                        <div className='text-3xl text-white'>credit-card details</div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="number" className="text-primary-50 font-semibold">
                                Number
                            </label>
                            <InputText keyfilter="pnum" id="number" label="number" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="name" className="text-primary-50 font-semibold">
                                Name
                            </label>
                            <InputText keyfilter="alpha" id="name" label="name" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        </div>
                        <div className='flex-row'>
                        <div className="inline-flex flex-column gap-2">
                        <div className="inline-flex flex-column gap-2">
                            <label className="text-primary-50 font-semibold">
                            validity
                            </label>
                            <div className='flex-row'>
                                {/* לאפשר רק 2 ספרות */}
                            <InputText keyfilter="pnum" className="bg-white-alpha-20 border-none p-1 text-primary-50 w-2 text-xl"></InputText>&nbsp;
                            <span className='text-3xl text-white'>/</span>&nbsp;
                            <InputText keyfilter="pnum" className="bg-white-alpha-20 border-none p-1 text-primary-50 w-2 text-xl"></InputText>&nbsp;</div>
                        </div>
                            <label className="text-primary-50 font-semibold">
                                svv
                            </label>
                            <div className='flex-row'>
                                {/* לאפשר רק ספרה אחת */}
                            <InputText keyfilter="pnum"  className="bg-white-alpha-20 border-none p-1 text-primary-50 w-1 text-xl" type="password"></InputText>&nbsp;
                            <InputText keyfilter="pnum"  className="bg-white-alpha-20 border-none p-1 text-primary-50 w-1 text-xl" type="password"></InputText>&nbsp;
                            <InputText keyfilter="pnum" className="bg-white-alpha-20 border-none p-1 text-primary-50 w-1 text-xl" type="password"></InputText>&nbsp;</div>
                        </div></div>
                        <div className="flex align-items-center gap-2">
                            <Button label="For-Payment" onClick={(e) => {hide(e); order()}} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                            <Button label="Cancel" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        </div>
                    </div>
                )}
            ></Dialog>
        </div>
    )
}
        