import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import RandomRoll from '../../containers/actions/random-roll';
import ManualRoll from '../../containers/actions/manual-roll';
import './Actions.css';

const Actions = (props) => {
  const { turnInProgress, gameInProgress } = props;
  const isDisabled = () => turnInProgress || !gameInProgress;
  return (
    <div className="actions">
      <Row>
        <Col xs={12} md={6}>
          <RandomRoll disabled={isDisabled()}/>
        </Col>
        <Col xs={12} md={6}>
          <ManualRoll disabled={isDisabled()} />
        </Col>
      </Row>
    </div>
  )
};

Actions.propTypes = {
  turnInProgress: PropTypes.bool.isRequired,
  gameInProgress: PropTypes.bool.isRequired
};

export default Actions;
