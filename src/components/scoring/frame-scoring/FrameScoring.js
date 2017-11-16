import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './FrameScoring.css';

const FrameScoring = (props) => {
  const { scoring } = props;
  const { rolls, total } = scoring;

  const renderRollScores = () => rolls.map((rollScore, rollIndex) => renderRollScore(rollIndex));
  const renderRollScore = (rollIndex) => <span className="roll-scoring" key={rollIndex}>{renderValue(rolls, rollIndex)}</span>;
  const renderValue = (rolls, index) => {
    if (scoring.rolls[index] === 10) { return "X" }
    if (scoring.isSpare() && index === 1) { return "/"}
    return rolls[index] === null ? "-" : rolls[index]
  }
  return (
    <div className="frame-scoring">
      <div className="frame-scoring__rolls">
        {renderRollScores()}
      </div>
      <div className="frame-scoring__total">
        <span>Total: {total}</span>
      </div>
    </div>
  )
};

export default FrameScoring;
