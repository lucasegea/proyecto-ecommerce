import React, {useState, useContext} from "react";
import Item from "./Item";
import ItemDetailsProvider from "../Item/ItemDetail"


const ItemList = ({products}) => {
    //const {consulta} = useContext(ItemContext);
    //const products = products;
    

    return (
        <div>
            {products.map((product) => {
                return <div><Item key={product.id} product={product} /> </div>
            }
            )}
        </div>)
}

export default ItemList;
