import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './style.css';

class Message extends PureComponent {
  render() {
    const { communicat } = this.props;
    console.log(communicat);
    return (
      <div className='Message'>
        {communicat}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  communicat: state.game.message
});

const mapDispatchToProps = ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
