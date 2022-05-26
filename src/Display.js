import React, { useState, useEffect } from "react";

function Display(props) {
    const [weatherInfo, setWeatherInfo] = useState([]);

    const getWeatherInfo = async () => {
        let url = `https://api.weatherapi.com/v1/current.json?key=${props.apikey}&q=${props.placeName}&aqi=no`;
        let weatherInfo = await fetch(url);
        let parsedweatherInfo = await weatherInfo.json();
        setWeatherInfo(parsedweatherInfo.location);
    };
    // eslint-disable-next-line
    useEffect(async () => {
        console.log('useEffect')
        getWeatherInfo();
    }, [props.placeName]);

    return (
        <>
            <div className="container">
                <div className="row">
                    {weatherInfo &&
                        Object.values(weatherInfo).map((key, value) => {
                            return (
                                <div className="col" key={key}>
                                    {key}
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
}

export default Display;
