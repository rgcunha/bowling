import React from 'react';
import PropTypes from 'prop-types';

const GameStatus = (props) => {
  const { inProgress } = props;
  const renderStatus = () => (
    inProgress ?
      <p>Game in progress!</p> :
      <p>Game Over! Please refresh the page to create a new game</p>
  )
  return (
    <div className="game-status">
      {renderStatus()}
    </div>
  )
};

GameStatus.propTypes = {
  inProgress: PropTypes.bool.isRequired
};

export default GameStatus;
