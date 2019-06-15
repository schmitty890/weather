import React from 'react';
import styles from "./List.module.css";
import { Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';
import weatherIconAPI from "../../utils/weatherIcons/weatherIcons";

const Hero = props => {
    console.log(props);
    console.log(weatherIconAPI);

    // const icon = weatherIconAPI(props.icon);
    const icon = weatherIconAPI.getIcon(props.icon);
    
    return (
        <Col sm className={styles['list-wrapper']}>
            <div>{props.dateTime}</div>
            <Moment fromNow>{props.dateTime}</Moment>
            <div>{props.description}</div>
            <div>{icon}</div>
            <div><i className="wi wi-night-sleet"></i>{props.temp}</div>
        </Col>
    )
}

export default Hero;