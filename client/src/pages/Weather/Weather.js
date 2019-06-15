import React, { Component } from "react";
import Hero from '../../components/Hero/Hero';
import List from '../../components/List/List';
import SearchNav from '../../components/SearchNav/SearchNav';
import axios from "axios";
import { Container } from 'react-bootstrap';

class Weather extends Component {

    state = {
        currentWeather: [
            { name: "" }
        ],
        zip: ""
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
                { name: resp.data.name }
              ]
            });
            })
            .catch(err => console.log('error :('));
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
                city={this.state.currentWeather[0].name} />
            <List />
            </Container>
        );
    }
}

export default Weather;