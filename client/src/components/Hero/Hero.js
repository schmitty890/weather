import React from 'react';
import styles from "./Hero.module.css";
import { Row, Col } from 'react-bootstrap';

const Hero = props => {
    return (
        <Row>
            <Col sm={12} className={styles.hero}>sm=12 main hero area</Col>
        </Row>
    )
}

export default Hero;