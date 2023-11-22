import React from "react";
import image2 from "./Explore image 1-01.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faBatteryThreeQuarters} from "@fortawesome/free-solid-svg-icons"

export function Splashpage1() { 
    return(
        <>
        <div className="Display text-center">
            <div className="col-12">
                <h5 className="text-start pe-5 ps-4 pt-1">12.22</h5>
                <div className="camera"></div>
                <div className="text-end network">
                <FontAwesomeIcon icon={faWifi} className="text-dark  " />
                <FontAwesomeIcon icon={faWifi} className="text-dark  ms-2 me-2" />
                <FontAwesomeIcon icon={faBatteryThreeQuarters} className=" me-2" />
                </div>
            </div>
        
        <h1 className="text-start col-7 ms-5 mt-5 pt-2 splash1h1">
            Let's make your dream vacation...</h1>
            <img src={image2} className="explore1image col-10 "/>
            <Link to={"/Splashpage2"}><button className="btn btn-primary fs-4 fw-bold ps-4 pe-4">Explore</button></Link>
            <div className=" d- flex flex-wrap row col-9 mt-5 ms-5 justify-content-center">
                <div className="pointcircle col-1 "></div>
                <div className="pointcircle bg-dark col-1  ms-5 "></div>
                <div className="pointcircle bg-dark col-1  ms-5"></div>
            </div>
        </div>
        </>
    )  
}