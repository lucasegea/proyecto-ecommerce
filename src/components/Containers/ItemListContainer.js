import React from "react";
import Item from '../Item/Item';
import {useState} from 'react';

function ItemListContainer() {

       const items = [
            {
                id: 0,
                title: 'producto 1',
                content: 'contenido 1',
                link: '#',
                image: '',
            },
            {
                id: 1,
                title: 'producto 2',
                content: 'contenido 2',
                link: '#',
                image: '',
            }
    ]


return (
    <div>
        {items.map((article) => 
        <Item article = {article} key={article.id} />
        )}
    </div>

)
            
}
export default ItemListContainer;

export const Greeting = ({nombre}) =>{
    return(
        <div>Saludos {nombre}</div>
    )

};




