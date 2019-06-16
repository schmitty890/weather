import React from 'react';
// import styles from "./SearchNav.module.css";
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

const Hero = props => {
    // console.log(props);
    let input;
    return (
        <Navbar bg="dark" variant="dark">
            <Form inline>
                <FormControl ref={node => input = node} type="text" maxLength="5" placeholder={`ex: ${props.zip}`} className="mr-sm-2" />
                <Button variant="outline-info" onClick={(event) => props.action(event, input.value)}>Search by zipcode!</Button>
            </Form>
        </Navbar>
    )
}

export default Hero;





