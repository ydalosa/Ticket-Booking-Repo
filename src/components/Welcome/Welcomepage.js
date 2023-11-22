import React from "react";
import image from "./Logo final-01.png"
import { Link } from "react-router-dom";
import { Splashpage1 } from "../Splashpage1/Splashpage1";

export function Welcomepage ()
{
    return(
        <>
        <div className="Display ">
        <div className="camera "></div>
        <Link to={"/Splashpage1"} className="linktofirst">
        <img src={image} className="Brandlogo "/>
       <h1 className="booking">Welcome</h1>
        <h1 className=" booking">Ticket<span className="titleticket"> Booking</span></h1>
        </Link>
        </div>
        </>
    )
}