import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import BasketItem from './BasketItem';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import useAuth from '../auth/useAuth';
import { useCreateNewBasketMutation } from './basketApiSlice';
import Msg from './Msg';
import { useNavigate } from 'react-router';

export default function Basket() {

    const { _id } = useAuth();
    const navigate = useNavigate();
    const [addFunc, { data: data = [], isLoading, isSuccess, isError, error }] = useCreateNewBasketMutation();
    const getBasket = () => {
        const myBasket = JSON.parse(localStorage.getItem("basket"));

        if (!myBasket || !Array.isArray(myBasket))
            return [];
        return myBasket;
    };

    const [basket, setBasket] = useState(getBasket());
    const [orders, setOrders] = useState(getBasket());
    const [empty, setEmpty] = useState(basket.length === 0);
    const [success, setSuccess] = useState(false);
    const [orderVisible, setOrderVisible] = useState(false);

    useEffect(() => {
        if (isSuccess)
            setSuccess(true);
    }, [isSuccess]);

    const refetch = () => {
        setBasket(getBasket());
        setEmpty(basket.length === 0);
        try {
            if (_id !== "")
                basket.forEach(e => { addFunc({ products: e.id, customer: _id, count: e.count }) });
        } catch (err) {
            console.log(err);
        }
    };

    const handle = () => {
        navigate("/auth");
    };

    const listTemplate = (items) => {
        if (!items || items.length === 0) return null;
        return <div className="grid grid-nogutter">{items.map((product, index) => (
            <BasketItem product={product} index={index} refetch={refetch} key={index} />
        ))}</div>;
    };

    const order = async () => {
        setOrders(getBasket());
        await localStorage.setItem("basket", JSON.stringify([]));
        refetch();
    };

    return (
        <div className="card">
            <div>
                <br />
                <br />
                <br />
                {isSuccess && <Msg />}
            </div>
            <DataView value={basket} itemTemplate={listTemplate} />
            {empty && <p>הסל שלך ריק</p>}
            <br />
            {_id !== "" && !isSuccess && !empty && (
                <Button icon="pi pi-credit-card" disabled={empty || _id === ""} onClick={() => { order() }} raised aria-label="Filter">
                    &nbsp; to paying
                </Button>
            )}
            {_id === "" && <Button onClick={handle}>הרשם כדי להזמין</Button>}
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
                                        <InputText keyfilter="pnum" className="bg-white-alpha-20 border-none p-1 text-primary-50 w-2 text-xl"></InputText>&nbsp;
                                        <span className='text-3xl text-white'>/</span>&nbsp;
                                        <InputText keyfilter="pnum" className="bg-white-alpha-20 border-none p-1 text-primary-50 w-2 text-xl"></InputText>&nbsp;
                                    </div>
                                </div>
                                <label className="text-primary-50 font-semibold">
                                    svv
                                </label>
                                <div className='flex-row'>
                                    <InputText keyfilter="pnum" className="bg-white-alpha-20 border-none p-1 text-primary-50 w-1 text-xl" type="password"></InputText>&nbsp;
                                    <InputText keyfilter="pnum" className="bg-white-alpha-20 border-none p-1 text-primary-50 w-1 text-xl" type="password"></InputText>&nbsp;
                                    <InputText keyfilter="pnum" className="bg-white-alpha-20 border-none p-1 text-primary-50 w-1 text-xl" type="password"></InputText>&nbsp;
                                </div>
                            </div>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <Button label="For-Payment" onClick={(e) => { hide(e); order() }} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                            <Button label="Cancel" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        </div>
                    </div>
                )}
            />
        </div>
    );
}
