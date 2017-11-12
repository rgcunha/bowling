import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Pin from './pin';
import './Pins.css';

const Pins = (props) => {
  const { pins } = props;

  const isPinUp = pin => pins.includes(pin);

  const grid = [[10, 9, 8, 7], [6, 5, 4], [3, 2], [1]];

  const renderGrid = () => grid.map((pins, index) => (<Row key={index}>{renderPins(pins)}</Row>));

  const renderPins = (pins) => {
    const size = 12 / pins.length;
    return pins.map(pin => <Col key={pin} xs={size}>{renderPin(pin)}</Col>);
  }

  const renderPin = pin => <Pin key={pin} number={pin} isUp={isPinUp(pin)} />

  return (<div className="pins">{renderGrid()}</div>);
};

export default Pins;
