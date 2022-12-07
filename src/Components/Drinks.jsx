import React from "react";
import { memo } from "react";

 const Drinks = memo(({name, url}) => {
    return <div>
        <p>{name}</p>
        <img src={url} alt="cocktail" height="100px" width="50px"/>
    </div>
})

export default Drinks