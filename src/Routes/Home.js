import React from "react";
import ItemCount from "../components/CartWidget/ItemCount";

const Home = () => {
    
    const cantProducts = '4';

    return ( <div> <ItemCount cantProducts /> </div>
    )
};

export default Home;