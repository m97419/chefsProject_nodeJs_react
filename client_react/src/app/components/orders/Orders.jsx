import React, { useState, useEffect } from 'react';
import { useGetBasketByChef1Query } from '../basket/basketApiSlice';
import useAuth from '../auth/useAuth';

export default function Orders() {
    const {_id} = useAuth
    const { data: ordersData = [], isLoading, isSuccess, isError, error, refetch } =useGetBasketByChef1Query({chefId:_id})
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        console.log("ordersData"+ordersData);
        // ProductService.getProducts().then((data) => setProducts(data.slice(0, 12)));
        setOrders(ordersData)
        console.log(orders);
    }, [isSuccess]);
    return (
        <>
            Orders Page
            hhhhhhh
        
        </>
    )
}
        