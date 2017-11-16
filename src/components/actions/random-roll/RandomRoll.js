import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const RandomRoll = (props) => {
  const { onRoll, turnInProgress, gameInProgress } = props;
  const isDisabled = () => turnInProgress || !gameInProgress;
  return (
    <div className="roll-button">
      <Button className="btn btn-primary" disabled={isDisabled()} onClick={onRoll}>Random Roll</Button>
    </div>
  )
};

RandomRoll.propTypes = {
  onRoll: PropTypes.func.isRequired,
  turnInProgress: PropTypes.bool.isRequired,
  gameInProgress: PropTypes.bool.isRequired
};

export default RandomRoll;
