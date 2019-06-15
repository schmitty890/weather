import React from 'react';
import styles from "./List.module.css";
import { Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';

const Hero = props => {
    console.log(props);

    return (
        <Col sm className={styles['list-wrapper']}>
            <div>{props.dateTime}</div>
            <Moment fromNow>{props.dateTime}</Moment>
            <div>{props.description}</div>
            <div>{props.icon}</div>
        </Col>
    )
}

export default Hero;