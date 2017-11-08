import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Scoring from '../../components/scoring';
import Pins from '../../components/pins';
import Roll from '../../components/actions/roll';
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
            <Roll />
          </Col>
        </Row>
      </div>
    </div>
  )
};

export default App;
