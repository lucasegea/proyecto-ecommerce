import React, { useState } from "react";

const CartContext = React.createContext();

const CartItemProvider = ({children}) => {
    const [itemsIdContainer, setItemsIdContainer] = useState([]);
    const [itemsContainer, setItemsContainer] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const [item, setItem] = useState('');
    const [itemCountExist, setItemCounExist] = useState(0);


    const addItemToCart = (id, item) => {
            setItemsIdContainer([...itemsIdContainer, id]); 
             if(item.stock > item.countExist){
                if(!itemsContainer.includes(item)){
                    item.countExist = item.countExist + 1 ;
                    setItemsContainer([...itemsContainer, item])
                }else{
                    item.countExist = item.countExist + 1;
                }   
        setItemCounExist(item.countExist);
}
    return itemCountExist;
 }

    const setPriceOfCart = (item) => {
        setTotalPrice(totalPrice + item.price)
        return (totalPrice);
    }

    const deleteItems = () => {
        setItemsIdContainer([]);
        setItemsContainer([]);
        setTotalPrice(0);
        setItemCounExist(0);
    }


    return (
        <CartContext.Provider value={{ itemsIdContainer, addItemToCart, deleteItems, itemsContainer, setPriceOfCart, totalPrice, setProducts, products, itemCountExist, item, setItem}}>
            {children}
        </CartContext.Provider>
    );

}
export {CartContext, CartItemProvider };