import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Pin from './pin';
import './Pins.css';

const Pins = () => (
  <div className="pins">
    <Row>
      <Col><Pin number={10} /></Col>
      <Col><Pin number={9} /></Col>
      <Col><Pin number={8} /></Col>
      <Col><Pin number={7} /></Col>
    </Row>
    <Row>
      <Col><Pin number={6} /></Col>
      <Col><Pin number={5} /></Col>
      <Col><Pin number={4} /></Col>
    </Row>
    <Row>
      <Col><Pin number={3} /></Col>
      <Col><Pin number={2} /></Col>
    </Row>
    <Row>
      <Col><Pin number={1} /></Col>
    </Row>
  </div>
);

export default Pins;
