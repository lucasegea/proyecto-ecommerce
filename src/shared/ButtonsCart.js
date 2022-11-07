import React, {useState, useContext} from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from 'react-router-dom';

export const ButtonAddToCart = ({id, stock, item}) => {
    const { addItemToCart, setPriceOfCart, itemCountExist, setItem} = useContext(CartContext);
    const [isAdded, setIsAdded] = useState(1);
    const [textCarro, setTextCarro] = useState('');
    setItem(item);

    const controllerAddToCart = () => {
        if ((stock >= isAdded) && (stock > item.countExist)) {
            addItemToCart(id, item)
            changeStateButton();
            setPriceOfCart(item);
        }
    }
    
    const changeStateButton = () => {
        
            setIsAdded(isAdded+1);
            setTextCarro( isAdded == 1 ? `Tiene ${isAdded} articulo de este producto` : `Tiene ${isAdded} articulos de este producto`);  
    }

    return <div>
                <button onClick={() => controllerAddToCart()}> Añadir articulo </button> {textCarro}
        </div>
}

export const ButtonLoadMore = (item) => {

    const loadMore = () => {

    }

    return <div>
        <Link to={`/itemdetail/${item.id}`}> <button onClick={() => loadMore()}> Ver más </button> </Link> 
    </div>
}
