import React, {useState, useContext} from "react";
import Item from "./Item";
import ItemContext from '../../contexts/ItemContext';


const ItemList = () => {
    const {consulta} = useContext(ItemContext);

    return (
        <div>
            {consulta.map((producto) => {
                return <div><Item key={producto.id} title={producto.title} content={producto.content} image={producto.image} stock={producto.stock} /> </div>
            }
            )}
        </div>)
}

export default ItemList;
