import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './RollButton.css';

const RollButton = (props) => (
  <div className="roll-button">
    <Button className="btn btn-primary" onClick={props.onRoll}>Roll</Button>
  </div>
);

RollButton.propTypes = {
  onRoll: PropTypes.func.isRequired
};

export default RollButton;
