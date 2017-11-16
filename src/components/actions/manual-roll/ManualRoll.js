import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const ManualRoll = (props) => {
  const { onRoll, pinsLeft, disabled } = props;
  const scoreOptions = [0].concat(pinsLeft.map((pin,index) => index + 1));
  const listOptions = () => scoreOptions.map((option) => <MenuItem key={option} onClick={() => onRoll(option)} eventKey={option}>{option}</MenuItem>);
  return (
    <div className='manual-roll'>
      <DropdownButton id='manual-roll' title="Manual Roll" bsStyle="primary" disabled={disabled}>
        {listOptions()}
      </DropdownButton>
    </div>
  )
};

ManualRoll.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onRoll: PropTypes.func.isRequired,
  pinsLeft: PropTypes.array.isRequired
};

export default ManualRoll;
