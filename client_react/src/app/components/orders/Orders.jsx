import React, { useState, useEffect } from 'react';
import { useGetBasketByChef1Query } from '../basket/basketApiSlice';
import { useGetProductByIdMutation } from '../products/productsApiSlice'
import useAuth from '../auth/useAuth';
import OrdersChef from './OrdersChef';
import OrdersCustomer from './OrdersCustomer';
import { Button } from 'primereact/button';

export default function Orders() {
    const { role } = useAuth()
    return (
        <>
            {role != "chef" && <OrdersCustomer />}
            {role == "chef" && <OrdersChef />}

        </>
    )
}
