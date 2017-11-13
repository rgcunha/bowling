import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import './ScoreSelect.css';

const ScoreSelect = (props) => {
  const { onManualRoll, turn } = props;
  const { inProgress, pinsLeft } = turn;
  const scoreOptions = pinsLeft.map((pin,index) => index + 1);
  const listOptions = () => scoreOptions.map((option) => <MenuItem key={option} onClick={() => onManualRoll(option)} eventKey={option}>{option}</MenuItem>);
  return (
    <div className='score-select'>
      <DropdownButton id='score-select' title="Manual Score" bsStyle="primary" disabled={inProgress}>
        {listOptions()}
      </DropdownButton>
    </div>
  )
};

ScoreSelect.propTypes = {
  onManualRoll: PropTypes.func.isRequired,
  turn: PropTypes.object.isRequired,
};

export default ScoreSelect;
