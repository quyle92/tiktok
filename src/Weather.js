import React, { useState } from "react";
import Navbar from "./Navbar.js";
import Display from "./Display.js";
function Weather() {
    const [placeName, setPlaceName] = useState("Saigon");
    let key = "d0a71f2798a849b3a37115217211109";
    return (
        <>
            <Navbar setPlaceName={setPlaceName} />
            <Display apikey={key} placeName={placeName} />
        </>
    );
}

export default Weather;
