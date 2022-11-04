import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import Item from "../components/Item/Item";

const CartPage = () => {
        const { itemsIdContainer, deleteItems, itemsContainer, totalPrice } = useContext(CartContext);
        const [itemCart, setItemCart] = useState();

         
        return (<div> {itemsIdContainer.length > 0? <>Tenes {itemsContainer.length} items y un total de {itemsIdContainer.length} unidad/es, en el carrito. </> : <> El chango esta vacio </>}
                
                <div>
                        {itemsIdContainer.length > 0? <h1> Items en el chango </h1> : <></>}
                        {itemsContainer.map((item) => {
                                if(itemsContainer.includes(item)){  
                                        return <div>  
                                                        <h1>• {item.title} - ${item.price} ({item.countExist} unidad/es)</h1>  
                                                </div>     
                                }                                     
                        })}
                </div>
                <div>{itemsIdContainer.length > 0? 
                (<div>
                        <hr></hr>
                        <h1>Precio Total ${totalPrice}</h1> <hr></hr>
                        <br></br>
                        <button onClick={() => deleteItems()}> Vaciar chango</button>
                </div>) : <></>}</div>
        </div>);
}

export default CartPage;