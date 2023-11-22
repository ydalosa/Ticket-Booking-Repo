import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faBatteryThreeQuarters} from "@fortawesome/free-solid-svg-icons"
import logo from "../Logo final-01.png"

export function Welcomelogin(){
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
                <img src={logo} className="loginlogo"/>
                <h1 className="fs-1 Welcomeloginh1">Welcome to Tickect <span className="Welcomeloginspan">Booking</span></h1>
                <div className="bg-white pt-5 pb-2 m-3 rounded">
                    <h3 className="welcomloginh2 ms-4 me-4 p-2 rounded">Login to Email ID</h3>
                    <h3 className="mt-4 mb-4">(or)</h3>
                    <h3 className="welcomloginh2 ms-4 me-4 p-2 rounded">Continue with Google</h3>
                    <div className="welcomrloginhr ms-3 mt-4"></div>
                    <p className="pt-3 welcomrloginp">Create a new account ? <span className="welcomrloginspan">Sign up</span></p>
                </div>

            </div>



            </div>
        
        </>
    )
}