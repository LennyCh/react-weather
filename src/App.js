import React from "react";
import Info from "./components/info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const apiKey = '30cb993ec42d09e401df734028fff830';

class App extends React.Component {

    state = {
        city: null,
        temp: null,
        icon: null,
        error: null
    };

    gettingWeather = async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;

        if (city) {
            const apiUrl = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
            const data = await apiUrl.json();

            const tempC = Math.floor(data.main.temp - 273);

            const iconUrl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

            this.setState({
                city: data.name,
                temp: tempC,
                icon: iconUrl,
            })
        } else {
            this.setState({
                error: 'Dashboard is empty'
            })
        }
    };

  render() {
    return (
        <div>
            <Info />
            <Form weatherMethod={this.gettingWeather}/>
            <Weather
                city={this.state.city}
                temp={this.state.temp}
                icon={this.state.icon}
                error={this.state.error}
            />
        </div>
    )
  }
}

export default App;