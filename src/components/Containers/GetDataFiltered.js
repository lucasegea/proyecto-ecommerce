import React, { useEffect, useState } from "react";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import ItemDetailsPage from "../../Routes/ItemDetailsPage";

const GetDataFiltered = (id) => {
const [product, setProduct] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        const q = query(itemsCollection, where ('id', '=', '5smBmE65BWNg6PenivTE' ));
        getDocs(itemsCollection).then((snapshot) => {
        const productfiltered = snapshot.docs.map((doc) => ({
           id: doc.id,
           ...doc.data(),
    }));
    setProduct(productfiltered);
});
 }, []);
 return(<ItemDetailsPage product={product}/>)
}

export default GetDataFiltered;