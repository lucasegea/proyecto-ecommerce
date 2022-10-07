import React from "react";
import { useEffect, useState } from "react";
import Item from '../Item/Item';
import ItemCount from "../CartWidget/ItemCount";

const ProductosJson = () => {

    const [consulta, setConsulta] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then((res) => res.json())
            .then((list) => {
                setTimeout(() => {
                    setConsulta(list.products);
                }, 1000);
            })
    }, []);



    return (
        <div>

            {consulta.map((producto) => {
                return <div><Item key={producto.id} title={producto.title} content={producto.content} image={producto.image} stock={producto.stock}/> </div>
            }

            )}

        </div>)
    //<div>{!producto ? <div>No existe producto </div> : <div> existe producto </div>} </div>;

}

export default ProductosJson;