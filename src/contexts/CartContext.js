import React, { useState, useEffect } from "react";
import { GetItemFiltered } from "../services/ItemsProvider";

const CartContext = React.createContext();

const CartItemProvider = ({children}) => {
const [itemsIdContainer, setItemsIdContainer] = useState([]);
const [itemCart, setItemCart] = useState([]);
const [itemsContainer, setItemsContainer] = useState([]);



const addItemById = (id) => {
    setItemsIdContainer([...itemsIdContainer, id]);
    //setItemsCart(id);
}



const setItemForCart = (item) =>{
    setItemsContainer([...itemsContainer, item]);
    console.log(itemsContainer)
}

const deleteItems = () => {
    setItemsIdContainer([]);
}

return (
    <CartContext.Provider value={{ itemsIdContainer, addItemById, deleteItems, setItemForCart, itemsContainer }}>
        {children}
    </CartContext.Provider>
);

}
export {CartContext, CartItemProvider };