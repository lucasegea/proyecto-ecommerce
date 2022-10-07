import React from 'react';
import ItemCount from '../CartWidget/ItemCount';


const Item = ({ title, content, image, stock, id }) => {

    

    return (
        <div>
            <h1>{title}</h1>
            <h2>Descripcion: {content}</h2>
            <img src={image} />
            <h2>Stock {stock}</h2>
            <ItemCount id={id} stock={stock}/>
            <hr />
        </div>

    );
};

export default Item;

    
