import React from 'react';
import { Button } from 'react-bootstrap';
import './Roll.css';

const Roll = (props) => (
  <div className="roll">
    <Button className="btn btn-primary" onClick={props.roll}>Roll</Button>
  </div>
);

export default Roll;
