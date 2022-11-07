import React, { useState } from 'react'
import { ButtonAddToCart, ButtonLoadMore } from '../../shared/ButtonsCart';


const Item = ({ product }) => {
    const [item, setItem] = useState(product);

    return (
        <>
            <div>
                <h1>{item.title} - ${item.price}</h1>
                <img src={item.image} />
                <h2>{item.stock > 1 ? ' Stock Disponible' : 'Sin Stock'}</h2>
                <ButtonLoadMore id={item.id} stock={item.stock} item={item}/>
                <ButtonAddToCart id={item.id} stock={item.stock} item={item}/>
                <hr />
            </div>
        </>
    );
}

export default Item;


