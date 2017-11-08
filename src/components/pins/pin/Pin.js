import React from 'react';
import './Pin.css';

const Pin = (props) => (
  <div className="pin">
    <span>{props.number}</span>
  </div>
);

export default Pin;
