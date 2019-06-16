import React from 'react';
import styles from "./List.module.css";
import { Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';
import weatherIconAPI from "../../utils/weatherIcons/weatherIcons";
import weatherMomentAPI from "../../utils/weatherMoment/weatherMoment";

const Hero = props => {
    const icon = weatherIconAPI.getIcon(props.icon);
    const day = weatherMomentAPI.getDayFromNow(props.dateTime);
    
    return (
        <Col sm className={styles['list-wrapper']}>
            <div className={styles.day}>{day} <Moment fromNow>{props.dateTime}</Moment></div>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.temp}>{props.temp} &deg;F</div>
            <div className={styles.description}>{props.description}</div>
        </Col>
    )
}

export default Hero;