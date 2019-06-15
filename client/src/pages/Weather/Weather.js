import React, { Component } from "react";
import Hero from '../../components/Hero/Hero';
import List from '../../components/List/List';
import SearchNav from '../../components/SearchNav/SearchNav';
import axios from "axios";
import { Button, Alert, Container, Row, Col, Form, FormControl, Navbar, Nav } from 'react-bootstrap';

class Weather extends Component {

    state = {
        currentWeather: [
            { name: "" }
        ]
    }

    componentDidMount() {
        axios.get('/api/weather/current')
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

    render() {
        const style = {
            border: '1px solid'
        };

        return (
            <Container>
            <SearchNav />
            <Hero 
                city={this.state.currentWeather[0].name} />
            <List />
            </Container>
        );
    }
}

export default Weather;