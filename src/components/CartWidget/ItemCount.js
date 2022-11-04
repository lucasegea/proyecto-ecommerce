import React, { useState, useContext } from "react";
import {CartContext} from '../../contexts/CartContext';


const ItemCount = ({id, stock}) => {
    const [articleStock, setArticleStock] = useState(0);
    const [countCart, setCountCart] = useState(0);
    const { addItemById } = useContext(CartContext);


    const buttonActionHandler = (ev) => {
        if (ev == "less") {
            articleStock > 0 ? setArticleStock(articleStock - 1) : setArticleStock(articleStock);
        }
        if (ev == "plus") {
            stock > articleStock ? setArticleStock(articleStock + 1) : setArticleStock(articleStock);
        }
        if (ev == "add") {
            setCountCart(articleStock);
            (countCart + articleStock) <= stock ? setCountCart(countCart + articleStock) : setCountCart(countCart);
        }
        if (ev == "delete") {
            setCountCart(0);
        }
    };

    return (<div>
        <button onClick={() => buttonActionHandler("less")} >-</button>
        <label>{articleStock}</label>
        <button onClick={() => buttonActionHandler("plus")} >+</button>
        <div> <button onClick={() => addItemById(id)} >Añadir al chango</button> </div>
        <div> El chango tiene {countCart} articulos.
            <button onClick={() => buttonActionHandler("delete")} >Vaciar chango</button> </div>
    </div>)
}

export default ItemCount;