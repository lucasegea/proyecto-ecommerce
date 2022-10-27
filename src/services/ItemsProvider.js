import React from "react";
import { getFirestore, collection, getDocs, getDoc, doc } from 'firebase/firestore';


export const GetItems = () => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'items');
    const arrproducts = getDocs(itemsCollection).then((snapshot) => {
        const arrproducts = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return arrproducts;
    });
    return arrproducts;
}

export const GetItemFiltered = (id) => {
    const db = getFirestore();
    const itemFiltered = doc(db, 'items', id);
    const product = getDoc(itemFiltered).then((item) => {
        const product = ([{ id: item.id, ...item.data() }]);
        return product;
    });
    return product;
}
