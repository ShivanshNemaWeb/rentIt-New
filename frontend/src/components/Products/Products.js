import React, { useState } from "react";
import Featured from './Featured/Featured';
import Wedding from './Wedding/Wedding';
import Party from './Party/Party';
import YouFollowed from './YouFollowed/YouFollowed';
import Traditional from "./Traditional/Traditional";
const Products = () => {
    return(<>
        <Featured/>
        <Wedding/>
        <Party/>
         <Traditional/> 
         <YouFollowed/>
    </>);
}
export default Products;