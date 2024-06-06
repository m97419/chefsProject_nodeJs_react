// import React from 'react';
// import { useState, useEffect } from 'react';
// import { useGetAllProductsQuery } from './products/productsApiSlice';
// import Post from './auth/Post';

// const Animation=()=>{
//     // const [index, setIndex] = useState(0);
//     const { data: productsData = [], isLoading, isSuccess, isError, error, refetch } = useGetAllProductsQuery();
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         if (isSuccess && productsData.length > 0) {
//             const interval = setInterval(() => {
//                 setCurrentIndex(prevIndex => (prevIndex + 1) % productsData.length);
//             }, 1000); // משנה את התמונה כל 3 שניות - ניתן לשנות את הזמן כרצונך
//             console.log(productsData[currentIndex]);
//             return () => clearInterval(interval);
//         }
//     }, [isSuccess, productsData]);
//     const backgroundImage = productsData[currentIndex]?.picture 
//         ? `url(http://localhost:7788/uploads/${productsData[currentIndex].picture.split("\\")[2]})`
//         : '';

//     return (
//         // <div className="app" style={{ backgroundImage: backgroundImage }}>
       
//     <div className="home" style={{ backgroundImage: `http://localhost:7788/uploads/${productsData[currentIndex]?.picture?.split("\\")[2]}` }}>
//         <Post></Post>
//         <img className='home' src={`http://localhost:7788/uploads/${productsData[currentIndex]?.picture?.split("\\")[2]}`}   ></img>
//         <div className="content">
            
//         </div>
//       </div>
//       );     

// }

// export default Animation;
import React from 'react';
import { useState, useEffect } from 'react';
import { useGetAllProductsQuery } from './products/productsApiSlice';

const Animation=()=>{
    // const [index, setIndex] = useState(0);
    // const { data: productsData = [], isLoading, isSuccess, isError, error, refetch } = useGetAllProductsQuery();
    const [currentIndex, setCurrentIndex] = useState(0);
    const productsData =[
        "a.jpg",
        "b.jpg",
        "c.jpg",
        "d.png",
        "e.png",
        "f.png",
        "g.png",
        "h.png",
        "i.png",
        "j.png",
        "l.jpg",
        "m.jpg",
        "n.png",
        "o.png"
    ] 

    useEffect(() => {
        if (productsData.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % productsData.length);
            }, 2000); // משנה את התמונה כל 3 שניות - ניתן לשנות את הזמן כרצונך
            return () => clearInterval(interval);
        }
    }, [ productsData]);
    const backgroundImage = productsData[currentIndex]?.picture 
        ? `url(http://localhost:7788/uploads/${productsData[currentIndex]})`
        : '';

    return (
        // <div className="app" style={{ backgroundImage: backgroundImage }}>
       
    <div className="home" style={{ backgroundImage: `http://localhost:7788/uploads/${productsData[currentIndex]}` }}>
        <img className='home' src={`http://localhost:7788/uploads/${productsData[currentIndex]}`}   ></img>
        <div className="content">
            
        </div>
      </div>
      );     

}

export default Animation;