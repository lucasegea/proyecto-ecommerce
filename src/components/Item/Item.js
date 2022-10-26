import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../CartWidget/ItemCount';

const Item = ({ product }) => {
    const [item, setItem] = useState(product);
    const moreInfo = (ev) => {
        //<GetDataFiltered id={item.id} />
    }
    return(
        <> 
            <div>
                <h1>{item.title}</h1>
                <h2>Descripcion: {item.content}</h2>
                <img src={item.image} />
                <h2>Stock {item.stock}</h2>
                <Link to={`/ItemDetail/${item.id}`}><button onClick={moreInfo}>Ver mas</button></Link>
                <ItemCount id={item.id} stock={item.stock}/>
                <hr/>
            </div>
            
        </>    
    );
}


export default Item;

    
