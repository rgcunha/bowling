import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FrameScoring from './frame-scoring';
import './Scoring.css';

const Scoring = (props) => {
  const listFrameScorings = scoring => scoring.map((frameScoring, index) =>
    (
      <FrameScoring key={index} frame={index + 1} scoring={frameScoring} />
    )
  );
  return (
    <div className="scoring">
      {listFrameScorings(props.scoring)}
    </div>
  );
};

export default Scoring;
