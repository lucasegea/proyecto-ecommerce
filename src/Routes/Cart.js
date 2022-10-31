import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import Item from "../components/Item/Item";

const CartPage = () => {
        const { itemsIdContainer, deleteItems, itemsContainer } = useContext(CartContext);
        //const [itemCart, setItemCart] = useState[]

        console.log(itemsContainer)
        
        

        return (<div> soy la webpage del chango {itemsIdContainer}

                <button onClick={() => deleteItems()}> Vaciar chango</button>
                <div>
                        {itemsContainer.map((item) => {
                                return <div><Item key={item.id} product={item} /> </div>
                        }
                        )}
                </div>

        </div>);
}

export default CartPage;