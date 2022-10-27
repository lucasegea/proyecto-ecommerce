import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {

    return (
        <div>
            {products.map((product) => {
                return <div><Item key={product.id} product={product} /> </div>
            }
            )}
        </div>)
}

export default ItemList;
