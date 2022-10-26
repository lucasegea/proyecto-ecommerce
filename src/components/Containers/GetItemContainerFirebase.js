import React, { useEffect, useState } from "react";
import ItemList from "./../Item/ItemList";
import { getFirestore, collection, getDocs, getDoc, doc } from 'firebase/firestore';

const GetItemListContainerFire = (idToSearch) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        if (idToSearch != {}) {
            const itemFiltered = doc(db, 'items', "eBA9Hd3p7vyecJgQ8rgY");
            getDoc(itemFiltered).then((item) => {
                setProducts([{ id: item.id, ...item.data() }]);
            });

        } else {
            const itemsCollection = collection(db, 'items');
            getDocs(itemsCollection).then((snapshot) => {
                const arrproducts = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(arrproducts);
            });
        }
    }, []);

    return (<ItemList products={products} />)
}

export default GetItemListContainerFire;