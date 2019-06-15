import React from 'react';
import styles from "./List.module.css";
import { Row, Col } from 'react-bootstrap';

const Hero = props => {
    console.log(props);
    return (
        <Row>
            <Col sm className={styles['list-wrapper']}>sm=true day 1</Col>
            <Col sm className={styles['list-wrapper']}>sm=true day 2</Col>
            <Col sm className={styles['list-wrapper']}>sm=true day 3</Col>
            <Col sm className={styles['list-wrapper']}>sm=true day 4</Col>
        </Row>
    )
}

export default Hero;