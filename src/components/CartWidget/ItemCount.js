import React from "react";
import { useState } from "react";
import CartWidget from './CartWidget';

/*El carrito funciona de manera local por cada Item y su stock. Para hacerlo global para todos los items me falta un poco de contexto*/

const ItemCount = ({ stock }) => {

    const [articleStock, setArticleStock] = useState(0);
    const [countCart, setCountCart] = useState(0);

    const buttonActionHandlerPlus = () => {
        stock > articleStock ? setArticleStock(articleStock+1) : setArticleStock(articleStock);
    };

    const buttonActionHandlerLess = () => {
        articleStock > 0 ? setArticleStock(articleStock - 1) : setArticleStock(articleStock);
    };

    const buttonActionHandlerAdd = () => {
        setCountCart(articleStock);
        (countCart + articleStock) <= stock ? setCountCart(countCart + articleStock) : setCountCart(countCart);
    };

    const buttonActionHandlerDelete = () => {
        setCountCart(0);
    };


    return (<div>
        
        
        <button onClick={buttonActionHandlerLess} >-</button>
        <label>{articleStock}</label>
        <button onClick={buttonActionHandlerPlus} >+</button>
        <div> <button onClick={buttonActionHandlerAdd} >Añadir al chango</button> </div>
        <div> El chango tiene {countCart} articulos. 
        <button onClick={buttonActionHandlerDelete} >Vaciar chango</button> </div>
    </div>

    )
}

export default ItemCount;