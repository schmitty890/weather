import React from 'react';
import styles from "./Hero.module.css";
import { Row, Col } from 'react-bootstrap';
import weatherIconAPI from "../../utils/weatherIcons/weatherIcons";
import weatherMomentAPI from "../../utils/weatherMoment/weatherMoment";

const Hero = props => {
    console.log(props);
    const error = props.error;
    const icon = weatherIconAPI.getIcon(props.icon);

    return (
        <Row>
            
                {error ? (
                    <Col sm={12} className={styles.hero}>
                        <div>OH NO ERROR</div>
                    </Col>
                ) : (
                    <Col sm={12} className={styles.hero}>
                        <div>city: {props.city}</div>
                        <div>cloudiness: {props.cloudiness}</div>
                        <div>description: {props.description}</div>
                        <div>humidity: {props.humidity}</div>
                        <div>pressure: {props.pressure}</div>
                        <div>sunrise: {props.sunrise}</div>
                        <div>sunset: {props.sunset}</div>
                        <div>temperature: {props.temperature}</div>
                        <div>windSpeed: {props.windSpeed}</div>
                        <div>icon: {icon}</div>
                    </Col>
                )}
        </Row>
    )
}

export default Hero;