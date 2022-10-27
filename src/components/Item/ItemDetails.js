import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetItemFiltered } from "../../services/ItemsProvider";


const ItemDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        GetItemFiltered(id).then((item) => {
            setItem(item[0]);
        })
    }, [id]);

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
            </div>
        </>
    );
}

export default ItemDetails;