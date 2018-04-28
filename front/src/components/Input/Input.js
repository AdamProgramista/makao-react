import React from 'react';
import './Input.css';

const Input = (props) => (
  <div>
    <input className='input' placeholder={props.text}/>
  </div>
)

export default Input;
