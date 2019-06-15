import React from 'react';
import styles from "./List.module.css";
import { Row, Col } from 'react-bootstrap';

const Hero = props => {
    console.log(props);

    return (
        <Col sm className={styles['list-wrapper']}>
            <div>{props.dateTime}</div>
            <div>{props.description}</div>
            <div>{props.icon}</div>
        </Col>
    )
}

export default Hero;