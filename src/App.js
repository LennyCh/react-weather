import React from "react";
import Info from "./components/info";
import Form from "./components/Form";
import all from "./App.css"

const apiKey = '30cb993ec42d09e401df734028fff830';

class App extends React.Component {

    state = {
        dashboardState: 'Dashboard is empty',
        city: [],
        error: false
    };

    gettingWeather = async (event) => {
        try {event.preventDefault();
        const city = event.target.elements.city.value;

        if (city) {
            const apiUrl = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
            const data = await apiUrl.json();

            const tempC = Math.floor(data.main.temp - 273);

            const iconUrl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

            const inputtedCity = {
                id: data.id,
                name: data.name,
                temp: tempC,
                icon: iconUrl
            };

            const newCity = [...this.state.city, inputtedCity];
            console.log(newCity);

            return this.setState({
                dashboardState: null,
                city: newCity,
                error: false
            })
        } else {
            this.setState({
                error: 'Dashboard is empty'
            })
        }
        } catch (e) {
            this.setState({
                error: 'City name is incorrect'
            })
        }

    };

    filter = id => () => {
        const city = this.state.city;
        const filteredCity = city.filter(element => element.id !== id);
        this.setState({ city: filteredCity });
    };

    renderDashboard = () => {
        const { city } = this.state;
        return city.map(item => {
            const { id, name, temp, icon } = item;
            return (
                <div className={'weather'} key={id}>
                    <img src={icon} alt={'Weather description'}/>
                    <p>{name}</p>
                    <p>{temp}&#8451;</p>
                    <form onClick={this.filter(id)} className={'weather__delete'}>
                        Delete
                    </form>
                </div>
            )
        })
    };

  render() {
    return (
        <div>
            <Info />
            <Form gettingWeather={this.gettingWeather}/>
            <div className={'dashboard'}>
                {this.renderDashboard()}
            </div>
            <div className={'dashboard_placeholder'}>{this.state.error}</div>
            <div className={'dashboard_placeholder'}>{this.state.dashboardState}</div>
        </div>
    )


  }
}

export default App;