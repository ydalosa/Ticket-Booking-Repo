import React from "react";
import imge from "../js.jpg"
import {product} from "../Product/product"

export function Home(){
    return (
        <>
        <h2>Hi, Good Morning</h2>
        <img src={imge}/>
        <product/>
        
        </>
    )
}