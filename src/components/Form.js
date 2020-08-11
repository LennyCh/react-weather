import React from "react";

const Form = props => (
    <div>
        <form onSubmit={props.gettingWeather}>
            <input type="text" name="city" placeholder="City"/>
            <button>Add</button>
            <button type="reset">Clear</button>
        </form>
    </div>
);

export default Form;