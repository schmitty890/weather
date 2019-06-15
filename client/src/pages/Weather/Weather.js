import React, { Component } from "react";
import Hero from '../../components/Hero/Hero';
import List from '../../components/List/List';
import axios from "axios";
import { Button, Alert, Container, Row, Col } from 'react-bootstrap';

class Weather extends Component {

  render() {
    const style = {
        border: '1px solid'
    };

    return (
      <Container>
        <Hero />
        <List />
      </Container>
    );
  }
}

export default Weather;