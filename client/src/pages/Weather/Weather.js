import React, { Component } from "react";
import Hero from '../../components/Hero/Hero';
import List from '../../components/List/List';
import SearchNav from '../../components/SearchNav/SearchNav';
import axios from "axios";
import { Container, Row, Spinner } from 'react-bootstrap';
import myAPI from "../../utils/api/api";

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
            { sunset: "" },
            { icon: "" }
        ],
        forecastWeather: [],
        zip: "",
        loading: false,
        error: ""
    }

    componentDidMount() {
        this.getZipcodeHandler();
        // this.getForecastWeather();
    }

    getZipcodeHandler() {
        myAPI.getZip()
          .then(res => this.setState({zip: res.data[0].zip}))
          .then(res => {
            this.getCurrentWeather();
            this.getForecastWeather();
          })
          .catch(err => console.log(err));
    }

    getCurrentWeather(zip) {
        // console.log('zip');
        // console.log(typeof zip);
        if(zip === undefined) {
            console.log('zip is undefined');
            zip = this.state.zip;
        }
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
                    { sunset: resp.data.sys.sunset },
                    { icon: resp.data.weather[0].icon }
                ],
                error: ""
            });
            })
            .catch(err => this.setState( { error: 'We have an error :(' } ));
    }

    getForecastWeather(zip) {
        // console.log(zip);
        if(zip === undefined) {
            console.log('zip is undefined');
            zip = this.state.zip;
        }
        const url = `/api/weather/forecast/${zip}`;
        this.setState({ loading: true });
        // console.log(url);
        axios.get(url)
            .then(resp => {
            console.log(resp.data);
                //set state for forecast
                this.setState({ 
                    forecastWeather: [...resp.data.list],
                    loading: false
                })
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
        myAPI.saveZip({
            zip: zip
          })
            .then(res => console.log('zipcode saved'))
            .catch(err => console.log(err));
    }

    render() {

        // console.log(this.state.forecastWeather);
        const getFirstFourForecasts = this.state.forecastWeather.slice(0, 4);
        let forecastWeatherResults = null;

        if(this.state.loading) {
            forecastWeatherResults = <Spinner animation="border" />;
        }

        forecastWeatherResults = getFirstFourForecasts.map((forecast, index) => {
            return <List
              key={index} 
              dateTime={forecast.dt_txt}
              description={forecast.weather[0].description}
              icon={forecast.weather[0].icon}
              temp={forecast.main.temp} />
        });

        if(this.state.loading) {
            forecastWeatherResults = <Spinner animation="border" />;
        }

        return (
            <Container>
            <SearchNav 
                zip={this.state.zip}
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
                icon={this.state.currentWeather[9].icon}
                error={this.state.error} />
            <Row>
                {forecastWeatherResults}
            </Row>
            </Container>
        );
    }
}

export default Weather;