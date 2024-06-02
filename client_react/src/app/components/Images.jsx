
import React, { useState, useEffect } from "react";
import { useGetAllProductsQuery } from "./products/productsApiSlice";

export default function Images() {
    const { data: productsData = [], isLoading, isSuccess, isError, error, refetch } = useGetAllProductsQuery();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isSuccess && productsData.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % productsData.length);
            }, 1000); // משנה את התמונה כל 3 שניות - ניתן לשנות את הזמן כרצונך
            console.log(productsData[currentIndex]);
            return () => clearInterval(interval);
        }
    }, [isSuccess, productsData]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            {isSuccess && productsData.length > 0 && (
                <img src={`http://localhost:7788/uploads/${productsData[currentIndex].picture.split("\\")[2]}`}alt={`Image ${currentIndex}`} style={{ maxWidth: '100%', maxHeight: '100%'}} />
            )}
        </div>
    );

}

