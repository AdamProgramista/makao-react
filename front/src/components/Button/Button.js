import React from 'react';
import './Button.css';

const Button = (props) => (
  <button
    className='btn'
    onClick={this.props.onClick}>
    {this.props.text}
  </button>
)

export default Button;
