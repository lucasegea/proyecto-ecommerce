import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../Item/ItemList";
import ItemContext from '../../contexts/ItemContext';



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
    return (<div> 
        
        <ItemContext.Provider value={{consulta, setConsulta}}>
            <ItemList />
        </ItemContext.Provider>
    </div> )
    //<div>{!producto ? <div>No existe producto </div> : <div> existe producto </div>} </div>;
}

export default ProductosJson;

/*
export default ItemListContainer;

export const Greeting = ({nombre}) =>{
    return(
        <div>Saludos {nombre}</div>
    )

};
*/



