import React, { Component } from "react";
// import Container from '../../components/Container/Container';
// import MastheadHero from '../../components/MastheadHero/MastheadHero';
// import Panel from '../../components/UI/Panel/Panel';
// import ProductListItem from '../../components/ProductListItem/ProductListItem';
import axios from "axios";
import { Button, Alert, Container, Row, Col } from 'react-bootstrap';

class Weather extends Component {

  render() {
    const style = {
        border: '1px solid'
    };

    return (
      <Container>
        <Row>
          <Col sm={12} style={style}>sm=12 main hero area</Col>
        </Row>
        <Row>
          <Col sm style={style}>sm=true day 1</Col>
          <Col sm style={style}>sm=true day 2</Col>
          <Col sm style={style}>sm=true day 3</Col>
          <Col sm style={style}>sm=true day 4</Col>
        </Row>
      </Container>
    );
  }
}

export default Weather;