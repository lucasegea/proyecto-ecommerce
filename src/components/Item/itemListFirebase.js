import React, { useEffect, useState } from "react";
//import ItemList from "./ItemList";
import {getFirestore, collection, getDocs} from 'firebase/firestore';

const ItemListFireBase = () => {
const [products, setProducts] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        getDocs(itemsCollection).then((snapshot) => {
        const arrproducts = snapshot.docs.map((doc) => ({
           id: doc.id,
           ...doc.data(),
    }));
    setProducts(arrproducts);
});
 }, []);
return (
    <div>
        {products.map((product) => (
            <div key={product.id}> {product.title} - ${product.price}</div>
        ))}
    </div>
)};

export default ItemListFireBase;