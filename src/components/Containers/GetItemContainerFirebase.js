import React, { useEffect, useContext } from "react";
import ItemList from "./../Item/ItemList";
import { GetItems } from "../../services/ItemsProvider";
import { CartContext } from "../../contexts/CartContext";

const GetItemListContainerFire = () => {
    const { products, setProducts } = useContext(CartContext);

    useEffect(() => {
        GetItems().then((arrproducts) => {
            setProducts(arrproducts);
        })
    }, []);

    return (<ItemList products={products} />)
}

export default GetItemListContainerFire;