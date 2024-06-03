import React, { useState, useEffect } from "react";
import { useGetAllProductsQuery } from "./products/productsApiSlice";

export default function XXX() {
    const { data: productsData = [], isSuccess } = useGetAllProductsQuery();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let interval;
        if (isSuccess && productsData.length > 0) {
            interval = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % productsData.length);
            }, 1000); // Change image every 1 second - you can adjust the time as you like
        }

        return () => clearInterval(interval);
    }, [isSuccess, productsData]);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            {isSuccess && productsData.length > 0 && (
                <div style={{
                    display: 'flex',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    animation: 'slideshow 1s linear infinite'
                }}>
                    {productsData.map((image, index) => (
                        <img
                            key={index}
                            src={`http://localhost:7788/uploads/${image.picture.split("\\")[2]}`}
                            alt={`Image ${index}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                opacity: index === currentIndex ? 1 : 0
                            }}
                        />
                    ))}
                </div>
             )} 
        </div>
    );
}
