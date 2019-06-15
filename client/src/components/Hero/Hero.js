import React from 'react';
import styles from "./Hero.module.css";
import { Row, Col } from 'react-bootstrap';

const Hero = props => {
    // console.log(props);
    return (
        <Row>
            <Col sm={12} className={styles.hero}>{props.city}</Col>
        </Row>
    )
}

export default Hero;