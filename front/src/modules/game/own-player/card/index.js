import React, { PureComponent } from 'react';
import './style.css';

class Card extends PureComponent {
  render() {
    const { color, figure, onClick } = this.props;
    return (
    <div className='card' onClick={onClick}>
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