import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { GetItemFiltered } from "../../services/ItemsProvider";


const ItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState('');
    const { addItemById, setItemForCart } = useContext(CartContext);
    const [isAdded, setIsAdded] = useState(1);
    const [textCarro, setTextCarro] = useState('');

    useEffect(() => {
        GetItemFiltered(id).then((item) => {
            setItem(item);
        })
    }, [id]);

    
    const controllerAddToCart = (id) => {
        if (item.stock >= isAdded) {
            addItemById(id)
            changeStateButton();
            setItemForCart(item);
        }

    }
    const changeStateButton = () => {
        
            setIsAdded(isAdded+1);
            setTextCarro( isAdded == 1 ? `Tiene ${isAdded} articulo de este producto` : `Tiene ${isAdded} articulos de este producto`);
        
    }

    return (
        <>
            <div>
                <h1>{[item.title]}</h1>
                <h2>Descripcion: {item.description}</h2>
                <img src={item.image} />
                <h2>Stock {item.stock}</h2>
                {item.category}
                <br />
                {item.price}
                <br />
                {item.size}
                <hr />
                <div><button onClick={() => controllerAddToCart(id)}> Aniadir articulo </button> {textCarro}</div>
            </div>
        </>
    );
}

export default ItemDetails;