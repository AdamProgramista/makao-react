import React, { PureComponent } from 'react';
import './style.css';
import classNames from 'classnames';

class Card extends PureComponent {
    render() {
      const { color, figure, onClick } = this.props;
      const isRed = (color === 'Hearts' || color === 'Tiles');
      return (
      <div 
        className={classNames('card', { red: isRed })} 
        onClick={onClick}
      >
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