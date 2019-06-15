import React from 'react';
import styles from "./Hero.module.css";
import { Row, Col } from 'react-bootstrap';

const Hero = props => {
    console.log(props);
    return (
        <Row>
            <Col sm={12} className={styles.hero}>
                <div>{props.city}</div>
                <div>{props.cloudiness}</div>
                <div>{props.description}</div>
                <div>{props.humidity}</div>
                <div>{props.pressure}</div>
                <div>{props.sunrise}</div>
                <div>{props.sunset}</div>
                <div>{props.temperature}</div>
                <div>{props.windSpeed}</div>
            </Col>
        </Row>
    )
}

export default Hero;