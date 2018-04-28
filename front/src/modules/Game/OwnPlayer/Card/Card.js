import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    const { color, figure } = this.props;
    return (
    <div className='card'>
      <div className='card__figure'>
       {figure}
      </div>
      <div className='card__color'>
       {color} 
      </div>
    </div>
    );
  }
}

export default Card;