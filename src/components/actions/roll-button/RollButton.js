import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './RollButton.css';

const RollButton = (props) => {
  const { onRoll, inProgress } = props;
  return (
    <div className="roll-button">
      <Button className="btn btn-primary" disabled={inProgress} onClick={onRoll}>Automatic Score</Button>
    </div>
  )
};

RollButton.propTypes = {
  onRoll: PropTypes.func.isRequired,
  inProgress: PropTypes.bool.isRequired
};

export default RollButton;
