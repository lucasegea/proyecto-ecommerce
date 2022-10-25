import React, { useState, useContext } from "react";
//import ItemContext from '../../contexts/ItemContext';
import ProductosJson from "../Containers/ItemListContainer";
import Item from "../Item/Item";

/*El carrito funciona de manera local por cada Item y su stock. Para hacerlo global para todos los items me falta un poco de contexto*/

const ItemCount = ({stock}) => {
    const [articleStock, setArticleStock] = useState(0);
    const [countCart, setCountCart] = useState(0);
    //const { consulta } = useContext(ItemContext);
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
        <div> <button onClick={() => buttonActionHandler("add")} >Añadir al chango</button> </div>
        <div> El chango tiene {countCart} articulos.
            <button onClick={() => buttonActionHandler("delete")} >Vaciar chango</button> </div>
    </div>)
}

export default ItemCount;