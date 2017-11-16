import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Scoring from '../scoring';
import Frame from '../frame';
import GameStatus from '../game-status';
import Actions from '../../components/actions';
import './App.css';

const App = () => {
  const scoring = [2, 3, 4];

  return (
    <div>
      <div className="container">
        <Scoring />
        <Row>
          <Col xs={12} md={6}>
            <Frame />
          </Col>
          <Col xs={12} md={6}>
            <Actions />
            <GameStatus />
          </Col>
        </Row>
      </div>
    </div>
  )
};

export default App;
