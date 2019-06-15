import React from 'react';
import './App.css';
import { Button, Alert, Container, Row, Col } from 'react-bootstrap';

function App() {
  var style = {
    border: '1px solid'
  };
  return (
    <div className="App">
      <Button variant="primary">Primary</Button>
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This example
          text is going to run a bit longer so that you can see how spacing within an
          alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.
        </p>
      </Alert>
      <Container>
        <Row>
          <Col sm={12} style={style}>sm=12</Col>
        </Row>
        <Row>
          <Col sm style={style}>sm=true</Col>
          <Col sm style={style}>sm=true</Col>
          <Col sm style={style}>sm=true</Col>
          <Col sm style={style}>sm=true</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
