import React from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { GetItemForId } from "../Containers/ItemListContainer";

const ItemDetailsProvider = () => {
    const {id} = useParams();
    //console.log(id)
    
    return (<><Item id={id} /></>)
}

export default ItemDetailsProvider;