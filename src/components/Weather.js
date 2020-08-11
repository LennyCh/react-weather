import React from "react";
import classes from "./components.css";

const Weather = props => {
    return (
        <div className={'dashboard'}>
            {props.city &&
            <div className={'weather'}>
                <img src={props.icon} alt="Weather icon"/>
                <p>{props.city}</p>
                <p>{props.temp}&#8451;</p>
                <form onSubmit={props.deletingWeather}>
                    <button className={'weather__delete'}>Delete</button>
                </form>
            </div>
            }
            <div className={'dashboard_placeholder'}>{props.error}</div>
        </div>
    );
}


export default Weather;