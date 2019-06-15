import React from 'react';
import styles from "./SearchNav.module.css";
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

const Hero = props => {
    return (
        <Navbar bg="dark" variant="dark">
        {/* <Navbar.Brand href="#home">Weather App</Navbar.Brand> */}
        {/* <Nav className="mr-auto"> */}
        {/* <Nav.Link href="#home">Home</Nav.Link> */}
        {/* <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        {/* </Nav> */}
        <Form inline>
            <FormControl type="text" placeholder="zipcode" className="mr-sm-2" />
            <Button variant="outline-info">Search by zipcode!</Button>
        </Form>
        </Navbar>
    )
}

export default Hero;





