import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../CartWidget/ItemCount';
//import {ItemContext} from '../../contexts/ItemContext';

const Item = ({ product }) => {
    const [item, setItem] = useState(product);
   // const {itemDetailsProvider} = useContext(ItemContext);
    return(
        <> 
            <div>
                <h1>{item.title}</h1>
                <h2>Descripcion: {item.content}</h2>
                <img src={item.image} />
                <h2>Stock {item.stock}</h2>
                <Link to={`/ItemDetail/${item.id}`} >Ver más</Link>
                <ItemCount id={item.id} stock={item.stock}/>
                <hr/>
            </div>
            
        </>    
    );
}


export default Item;

    
