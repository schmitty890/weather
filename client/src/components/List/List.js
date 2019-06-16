import React from 'react';
import styles from "./List.module.css";
import { Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';
import weatherIconAPI from "../../utils/weatherIcons/weatherIcons";
import weatherMomentAPI from "../../utils/weatherMoment/weatherMoment";

const Hero = props => {
    const icon = weatherIconAPI.getIcon(props.icon);
    const day = weatherMomentAPI.getTimeFromNow(props.dateTime);
    
    return (
        <Col sm className={styles['list-wrapper']}>
            <div className={styles.day}>{day}</div>
            <Moment fromNow>{props.dateTime}</Moment>
            <div>{props.description}</div>
            <div>{icon} {props.icon}</div>
            <div>{props.temp} &deg;F</div>
        </Col>
    )
}

export default Hero;