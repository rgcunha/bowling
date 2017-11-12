import React from 'react';
import './FrameScoring.css';

const FrameScoring = (props) => {
  const { rolls, total } = props.scoring;
  const renderRollScores = () => rolls.map((roll, index) => <span key={index}>Roll {index + 1}: {rolls[index]}</span>)
  return (
    <div className="frame-scoring">
      {renderRollScores()}
      <span>Total: {total}</span>
    </div>
  )
};

export default FrameScoring;
