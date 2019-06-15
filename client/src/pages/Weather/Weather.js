import React, { Component } from "react";
import Hero from '../../components/Hero/Hero';
import List from '../../components/List/List';
import SearchNav from '../../components/SearchNav/SearchNav';
import axios from "axios";
import { Container } from 'react-bootstrap';

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
        zip: "",
        error: ""
    }

    componentDidMount() {
        this.getCurrentWeather();
    }

    getCurrentWeather(zip) {
        console.log(zip);
        const url = `/api/weather/current/${zip}`;
        console.log(url);
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

    search = (event, zip) => {
        event.preventDefault();
        console.log('search zip clicked');
        // console.log(zip);
        this.setState({ zip: zip });
        this.getCurrentWeather(zip);
    }

    render() {
        // const style = {
        //     border: '1px solid'
        // };

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
            <List />
            </Container>
        );
    }
}

export default Weather;