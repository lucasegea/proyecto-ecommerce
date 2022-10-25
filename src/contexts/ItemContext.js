import React from "react";

const ItemContext = React.createContext();

const ItemDetailsProvider = (item) => {
    //console.log(item, "context content")
    
    return(
        <ItemContext.Provider item={{item}}>
        {item}
       </ItemContext.Provider>
    )
}

export {ItemContext, ItemDetailsProvider};