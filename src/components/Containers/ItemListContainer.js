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
    //console.log(products)
    return(<ItemList products={products}/>)
}


/*
    const GetItemForId = (id) => {
        const [product, setProduct] = useState([]);

        const filteredProduct = products.filter((item) => item.products.title === "Producto 1");
        console.log(filteredProduct)

        return (<div> <Item product={product} />caca </div>)
    }*/


/*
export default ItemListContainer;

export const Greeting = ({nombre}) =>{
    return(
        <div>Saludos {nombre}</div>
    )

};
*/



