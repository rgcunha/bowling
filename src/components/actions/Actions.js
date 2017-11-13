import React from 'react';
import { Row, Col } from 'react-bootstrap';
import RollButton from '../../containers/roll-button';
import ScoreSelect from '../../containers/score-select';
import './Actions.css';

const Actions = () => (
    <div className="actions">
      <Row>
        <Col xs={12} md={6}>
          <RollButton />
        </Col>
        <Col xs={12} md={6}>
          <ScoreSelect />
        </Col>
      </Row>
    </div>
);

export default Actions;
