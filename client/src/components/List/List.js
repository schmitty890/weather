import React from 'react';
import styles from "./List.module.css";
import { Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';
import weatherIconAPI from "../../utils/weatherIcons/weatherIcons";

const Hero = props => {
    const icon = weatherIconAPI.getIcon(props.icon);
    
    return (
        <Col sm className={styles['list-wrapper']}>
            <div>{props.dateTime}</div>
            <Moment fromNow>{props.dateTime}</Moment>
            <div>{props.description}</div>
            <div>{icon} {props.icon}</div>
            <div>{props.temp}</div>
        </Col>
    )
}

export default Hero;