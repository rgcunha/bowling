import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const ManualRoll = (props) => {
  const { onManualRoll, turn, gameInProgress } = props;
  const { inProgress, pinsLeft } = turn;
  const scoreOptions = [0].concat(pinsLeft.map((pin,index) => index + 1));
  const listOptions = () => scoreOptions.map((option) => <MenuItem key={option} onClick={() => onManualRoll(option)} eventKey={option}>{option}</MenuItem>);
  const isDisabled = () => turn.inProgress || !gameInProgress;
  return (
    <div className='score-select'>
      <DropdownButton id='score-select' title="Manual Roll" bsStyle="primary" disabled={isDisabled()}>
        {listOptions()}
      </DropdownButton>
    </div>
  )
};

ManualRoll.propTypes = {
  onManualRoll: PropTypes.func.isRequired,
  turn: PropTypes.object.isRequired,
  gameInProgress: PropTypes.bool.isRequired
};

export default ManualRoll;
