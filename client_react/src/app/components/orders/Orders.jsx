import React, { useState, useEffect } from 'react';
import { useGetOrderByChefQuery } from './ordersApiSlice';
import useAuth from '../auth/useAuth';

export default function Orders() {
    const {_id} = useAuth
    const { data: ordersData = [], isLoading, isSuccess, isError, error, refetch } =useGetOrderByChefQuery(_id);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        // ProductService.getProducts().then((data) => setProducts(data.slice(0, 12)));
        setOrders(ordersData)
    }, [isSuccess]);
    return (
        <>
            Orders Page
        
        </>
    )
}
        