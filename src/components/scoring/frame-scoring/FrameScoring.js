import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './FrameScoring.css';

const FrameScoring = (props) => {
  const { rolls, total } = props.scoring;
  const renderRollScores = () => rolls.map((rollScore, rollIndex) => renderRollScore(rollIndex));
  const renderRollScore = (rollIndex) => <span className="roll-scoring" key={rollIndex}>{rolls[rollIndex] ? rolls[rollIndex] : "-"}</span>;
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
