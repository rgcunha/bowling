import React from 'react';
import './Pin.css';

const Pin = (props) => {
  const { number, isUp } = props;
  const classNames = () => {
    const className = isUp ? "pin--up" : "pin--down";
    return ["pin", className];
  }
  return (
    <div className={classNames().join(" ")}>
      <span>{number}</span>
    </div>
  )
};

export default Pin;
