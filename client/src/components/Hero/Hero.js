import React from 'react';
import styles from "./Hero.module.css";
import { Row, Col } from 'react-bootstrap';
import weatherIconAPI from "../../utils/weatherIcons/weatherIcons";
import weatherMomentAPI from "../../utils/weatherMoment/weatherMoment";

const Hero = props => {
    console.log(props);
    const error = props.error;
    const icon = weatherIconAPI.getIcon(props.icon);
    const sunrise = weatherMomentAPI.getTimeFromNow(props.sunrise);
    const sunset = weatherMomentAPI.getTimeFromNow(props.sunset);

    return (
        <Row>
            
                {error ? (
                    <Col sm={12} className={styles.hero}>
                        <div>OH NO ERROR</div>
                    </Col>
                ) : (
                    <Col sm={12} className={styles.hero}>
                        <div className={styles.city}>{props.city}</div>
                        <div className={styles.temp}>{props.temperature} &deg;F</div>
                        <div className={styles.icon}>{icon}</div>
                        <div className={styles.description}>{props.description}</div>
                        <div>wind {props.windSpeed} mph &nbsp;&nbsp;&nbsp;&nbsp; pressure {props.pressure}</div>
                        <div>humidity {props.humidity}% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cloudiness {props.cloudiness}%</div>
                        <div><i className="wi wi-sunrise"></i> {sunrise} &nbsp;&nbsp;&nbsp;&nbsp; <i className="wi wi-sunset"></i> {sunset}</div>
                    </Col>
                )}
        </Row>
    )
}

export default Hero;