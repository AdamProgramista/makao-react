import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  render() {
    return (
      <div>
        <input className='input' placeholder={this.props.text}/>
      </div>
    );
  }
}

export default Input;
