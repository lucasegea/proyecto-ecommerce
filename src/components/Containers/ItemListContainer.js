// Documento reemplazado por consulta a firebase (GetItemContainerFirebase.js) //

import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../Item/ItemList";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const GetDataListContainer = () => {
        useEffect(() => {
            fetch('./products.json')
                .then((res) => res.json())
                .then((list) => {
                    setTimeout(() => {
                        setProducts(list.products);
                    }, 1000);
                });
        }, []);
        
    }
    GetDataListContainer();
    
    return(<ItemList products={products}/> )
}




