import React from 'react';
import './style.css';

const Button = (props) => (
  <button
    className='btn'
    onClick={props.onClick}>
    {props.text}
  </button>
)

export default Button;
