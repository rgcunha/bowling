import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import FrameScoring from './frame-scoring';
import './Scoring.css';

const Scoring = (props) => {
  const { scoring } = props;
  const total = scoring
    .map(frameScoring => frameScoring.total)
    .reduce((total, frameScore) => total + frameScore);
  const listFrameScorings = scoring => scoring.map((frameScoring) => {
    const { id } = frameScoring;
    return <li className="scoring__frame-scoring" key={id}><FrameScoring key={id} frame={id} scoring={frameScoring} /></li>
  });
  return (
    <div className="scoring">
      <ul className="scoring__frames-scoring">
        {listFrameScorings(scoring)}
      </ul>
      <p className="scoring__total">Total: {total}</p>
    </div>
  );
};

Scoring.propTypes = {
  scoring: PropTypes.array.isRequired
};

export default Scoring;
