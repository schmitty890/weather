import React, { Component } from "react";
import Hero from '../../components/Hero/Hero';
import List from '../../components/List/List';
import SearchNav from '../../components/SearchNav/SearchNav';
import axios from "axios";
import { Container, Row } from 'react-bootstrap';

class Weather extends Component {

    state = {
        currentWeather: [
            { name: "" },
            { temp: "" },
            { description: "" },
            { windSpeed: "" },
            { humidity: "" },
            { pressure: "" },
            { cloudiness: "" },
            { sunrise: "" },
            { sunset: "" }
        ],
        forecastWeather: [],
        zip: "",
        error: ""
    }

    componentDidMount() {
        this.getCurrentWeather();
        this.getForecastWeather();
    }

    getCurrentWeather(zip) {
        // console.log(zip);
        const url = `/api/weather/current/${zip}`;
        // console.log(url);
        axios.get(url)
            .then(resp => {
            console.log(resp.data);
            this.setState({ 
                currentWeather: [
                    { name: resp.data.name },
                    { temp: resp.data.main.temp },
                    { description: resp.data.weather[0].description },
                    { windSpeed: resp.data.wind.speed },
                    { humidity: resp.data.main.humidity },
                    { pressure: resp.data.main.pressure },
                    { cloudiness: resp.data.clouds.all },
                    { sunrise: resp.data.sys.sunrise },
                    { sunset: resp.data.sys.sunset }
                ],
                error: ""
            });
            })
            .catch(err => this.setState( { error: 'We have an error :(' } ));
    }

    getForecastWeather(zip) {
        // console.log(zip);
        const url = `/api/weather/forecast/${zip}`;
        
        // console.log(url);
        axios.get(url)
            .then(resp => {
            console.log(resp.data);
                //set state for forecast
                this.setState({ forecastWeather: [...resp.data.list] })
            })
            .catch(err => this.setState( { error: 'We have an error :(' } ));
    }

    search = (event, zip) => {
        event.preventDefault();
        console.log('search zip clicked');
        // console.log(zip);
        this.setState({ zip: zip });
        this.getCurrentWeather(zip);
        this.getForecastWeather(zip);
    }

    render() {
        // const style = {
        //     border: '1px solid'
        // };

        console.log(this.state.forecastWeather);
        const getFirstFourForecasts = this.state.forecastWeather.slice(0, 4);
        let forecastWeatherResults = 'getting weather...';
        forecastWeatherResults = getFirstFourForecasts.map((forecast, index) => {
            return <List
              key={index} 
              dateTime={forecast.dt_txt}
              description={forecast.weather[0].description}
              icon={forecast.weather[0].icon}
              temp={forecast.main.temp} />
        });

        return (
            <Container>
            <SearchNav 
                search={this.state.searchedZip}
                action={this.search} />
            <Hero 
                city={this.state.currentWeather[0].name}
                temperature={this.state.currentWeather[1].temp}
                description={this.state.currentWeather[2].description}
                windSpeed={this.state.currentWeather[3].windSpeed}
                humidity={this.state.currentWeather[4].humidity}
                pressure={this.state.currentWeather[5].pressure}
                cloudiness={this.state.currentWeather[6].cloudiness}
                sunrise={this.state.currentWeather[7].sunrise}
                sunset={this.state.currentWeather[8].sunset}
                error={this.state.error} />
            <Row>
                {forecastWeatherResults}
            </Row>
            </Container>
        );
    }
}

export default Weather;