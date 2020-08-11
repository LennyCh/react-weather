import React from "react";
import classes from "./components.css";

const Weather = props => (
    <div style={{display: "flex",
        flexWrap: "wrap",
        flexGrow: 1,
        alignItems: "flex-start"}}>
        { props.city &&
        <div style={{
            position: "relative",
            border: "1px solid #bbb",
            marginRight: "5px",
            marginBottom: "5px",
            padding: "0 10px",
            minWidth: "80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <img src={props.icon} alt="Weather icon"/>
            <p>{props.city}</p>
            <p>{props.temp}&#8451;</p>
            <form onSubmit={props.deletingWeather}>
                <button style={{textAlign: "center"}}>Delete</button>
            </form>
        </div>
        }
        <div style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>{props.error}</div>

    </div>
);


export default Weather;