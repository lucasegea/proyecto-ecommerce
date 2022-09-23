import React from "react";

function ItemListContainer() {
    const items = [
        {
            id: 0,
            content: 'contenido 1',
            link: '#',
            imagen: '',
        },
        {
            id: 0,
            content: 'contenido 2',
            link: '#',
            imagen: '',
        }
    ]


    
return (
    <div>
        {items.map(({link, content}) => {
            return <a href={link}> <br /> {content} <br /> </a>        
        }
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




