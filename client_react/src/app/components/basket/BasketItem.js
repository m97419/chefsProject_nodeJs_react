import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import { InputNumber } from 'primereact/inputnumber';
import { VirtualScroller } from 'primereact/virtualscroller';
import { Tag } from 'primereact/tag';
import { Avatar } from 'primereact/avatar';
       
export default function BasketItem(prop) {

    const [deleteDialogVisiabe, setDeleteDialogVisiabe] = useState(false);
    const [itemCount, setItemCount] = useState(prop.product.count);
    const [orderProducts,setOrderProducts]=useState(null);

    const changeCount= (productId, num)=>{
        const myBasket = JSON.parse(localStorage.getItem("basket"))
        const updateBasket = myBasket.map(prod=> prod.id== productId?{...prod,count:num}:prod)
        localStorage.setItem("basket",JSON.stringify(updateBasket))
        setItemCount(num)
    }

    const deleteItem = () => {
        const myBasket = JSON.parse(localStorage.getItem("basket"))
        const updateBasket = myBasket.filter(prod=> prod.id != prop.product.id)
        localStorage.setItem("basket",JSON.stringify(updateBasket))
        prop.refetch()
    }
    // const t=

console.log("prop.product.details"+prop.product.details);
    return (
        <>
            <div className="col-12" key={prop.product._id}>
                    <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': prop.index !== 0 })}>
                        <div>
                                <Avatar icon={<img src={`http://localhost:7788/uploads/${prop.product.details.chef.picture.split("\\")[2]}`}></img>
                                || "pi pi-user"} size="large" shape="circle" />
                            
                            <h5 >{prop.product.details.chef.name}</h5>
                        </div>&nbsp;&nbsp;&nbsp;
                        <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round picturesize" src={`http://localhost:7788/uploads/${prop.product.details.picture.split("\\")[2]}`} alt={prop.product.name} />
                        <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div className="text-2xl font-bold text-900">{prop.product.details.name}</div>
                                <div className="flex align-items-center gap-3">
                                     {/* <Tag color="red" value={prop.product.details.category[0].name}></Tag> */}
                                </div>
                            </div>
                            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <InputNumber value={itemCount} onValueChange={(e) => changeCount(prop.product.id,e.value)} showButtons buttonLayout="horizontal" incrementButtonClassName="p-button-text p-button-raised" decrementButtonClassName="p-button-text p-button-raised" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" min={1}/>
                            </div>
                            <div>
                                <span className="text-2xl font-semibold">${prop.product.details.price*itemCount}</span>
                            </div>
                            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <Button text icon="pi pi-trash" onClick={()=>setDeleteDialogVisiabe(true)}></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Dialog visible={deleteDialogVisiabe}  onHide={() => setDeleteDialogVisiabe(false)}>
                    <p className="m-0">
                        Cancel this product?
                    </p><br/><br/>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button icon="pi pi-times" onClick={() => setDeleteDialogVisiabe(false)} className="p-button-text" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button icon="pi pi-check" onClick={() => {setDeleteDialogVisiabe(false); deleteItem();}} autoFocus />
                    </div>
                </Dialog>
             
            </>
    )
}
        