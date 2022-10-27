import React, { useEffect, useState } from "react";
import ItemList from "./../Item/ItemList";
import { GetItems } from "../../services/ItemsProvider";

const GetItemListContainerFire = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        GetItems().then((arrproducts) => {
            setProducts(arrproducts);
        })
    }, []);

    return (<ItemList products={products} />)
}

export default GetItemListContainerFire;