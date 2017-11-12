import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Scoring from '../scoring';
import Pins from '../pins';
import RollButton from '../roll-button';
import './App.css';

const App = () => {
  const scoring = [2, 3, 4];

  return (
    <div>
      <div className="container">
        <h1>Bowling Scoring System</h1>
        <Scoring scoring={scoring} />
        <Row>
          <Col md={6}>
            <Pins />
          </Col>
          <Col md={6}>
            <RollButton />
          </Col>
        </Row>
      </div>
    </div>
  )
};

export default App;
