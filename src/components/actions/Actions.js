import React from 'react';
import { Row, Col } from 'react-bootstrap';
import RandomRoll from '../../containers/random-roll';
import ManualRoll from '../../containers/manual-roll';
import './Actions.css';

const Actions = () => (
    <div className="actions">
      <Row>
        <Col xs={12} md={6}>
          <RandomRoll />
        </Col>
        <Col xs={12} md={6}>
          <ManualRoll />
        </Col>
      </Row>
    </div>
);

export default Actions;
