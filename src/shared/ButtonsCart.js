import React, {useState, useContext} from "react";
import { CartContext } from "../contexts/CartContext";


export const ButtonAddToCart = ({id, stock, item, count}) => {
    const { addItemById, setItemForCart, setPriceOfCart} = useContext(CartContext);
    const [isAdded, setIsAdded] = useState(1);
    const [textCarro, setTextCarro] = useState('');
    
    const controllerAddToCart = () => {
        if (stock >= isAdded) {
            addItemById(id)
            changeStateButton();
            setItemForCart(item);
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
