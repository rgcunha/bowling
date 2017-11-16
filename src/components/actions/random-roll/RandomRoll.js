import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const RandomRoll = (props) => {
  const { onRoll, disabled } = props;
  return (
    <div className="roll-button">
      <Button className="btn btn-primary" disabled={disabled} onClick={onRoll}>Random Roll</Button>
    </div>
  )
};

RandomRoll.propTypes = {
  onRoll: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default RandomRoll;
