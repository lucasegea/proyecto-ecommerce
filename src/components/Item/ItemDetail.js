import React from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";

const ItemDetailsProvider = () => {
    const {id} = useParams();

    return (<><Item id={id} /></>)
}

export default ItemDetailsProvider;