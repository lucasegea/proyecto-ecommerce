import React, { useState } from "react";

const CartContext = React.createContext();

const CartItemProvider = ({children}) => {
    const [itemsIdContainer, setItemsIdContainer] = useState([]);
    const [itemsContainer, setItemsContainer] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItemById = (id) => {
            setItemsIdContainer([...itemsIdContainer, id]);    
    }

    const setItemForCart = (item) =>{
       if(!itemsContainer.includes(item)){
            setItemsContainer([...itemsContainer, item])
            item.countExist = item.countExist + 1 ;
       }else{
        item.countExist = item.countExist + 1;
       }        
    }

    const setPriceOfCart = (item) => {
        setTotalPrice(totalPrice + item.price)
        return (totalPrice);
    }


    const deleteItems = () => {
        setItemsIdContainer([]);
        setItemsContainer([]);
        setTotalPrice(0);
    }

    return (
        <CartContext.Provider value={{ itemsIdContainer, addItemById, deleteItems, setItemForCart, itemsContainer, setItemForCart, setPriceOfCart, totalPrice}}>
            {children}
        </CartContext.Provider>
    );

}
export {CartContext, CartItemProvider };