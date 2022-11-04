import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ButtonAddToCart } from '../../shared/ButtonsCart';

const Item = ({ product }) => {
    const [item, setItem] = useState(product);

    return (
        <>
            <div>
                <h1>{item.title} - ${item.price}</h1>
                <img src={item.image} />
                <h2>{item.stock > 1 ? ' Stock Disponible' : 'Sin Stock'}</h2>
                <Link to={`/itemdetail/${item.id}`}><button>Ver mas</button></Link>
                <ButtonAddToCart id={item.id} stock={item.stock} item={item}/>
                <hr />
            </div>
        </>
    );
}

export default Item;


