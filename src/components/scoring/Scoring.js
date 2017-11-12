import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FrameScoring from './frame-scoring';
import './Scoring.css';

const Scoring = (props) => {
  const listFrameScorings = scoring => scoring.map((frameScoring, index) =>
    (
      <Col key={index} xs={6} >
        <FrameScoring key={index} scoring={frameScoring} />
      </Col>
    )
  );
  return (
    <div className="scoring">
      <Row>
        {listFrameScorings(props.scoring)}
      </Row>
    </div>
  );
};

export default Scoring;
