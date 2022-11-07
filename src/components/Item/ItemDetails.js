import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { GetItemFiltered } from "../../services/ItemsProvider";
import { ButtonAddToCart } from "../../shared/ButtonsCart";


const ItemDetails = () => {
    const { id } = useParams();
    const { item, setItem } = useContext(CartContext);

    useEffect(() => {
        GetItemFiltered(id).then((item) => {
            setItem(item);
        })
    });

    return (
        <>
        {item.id != id ? (
        <div>Cargando...</div>
      ) : (
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
                <div> <ButtonAddToCart id={item.id} stock={item.stock} item={item}/> </div>
            </div>
        )}
        </>
    );
}

export default ItemDetails;