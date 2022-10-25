import React from "react";
import { useEffect, useState } from "react";
import Item from "../Item/Item";

export const ItemListFiltered = () => {
    const [product, setProduct] = useState([]);
    
    const GetDataListContainer = () => {
        useEffect(() => {
            fetch('./products.json')
                .then((res) => res.json())
                .then((list) => {
                    setTimeout(() => {
                        setProduct(list.products);
                    }, 1000);
                });
        }, []);
        
    }
    GetDataListContainer();
    const filteredProduct = product.filter((item) => item.products.title === "Producto 1");
    console.log(filteredProduct)
    setProduct(product)
    return (<div> <Item product={product} />caca </div>)
}


/*
    const GetItemForId = (id) => {
        const [product, setProduct] = useState([]);

        const filteredProduct = products.filter((item) => item.products.title === "Producto 1");
        console.log(filteredProduct)

        return (<div> <Item product={product} />caca </div>)
    }*/