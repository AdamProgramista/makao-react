import React, { Component } from 'react';
import './Login.css';
import { connect } from 'react-redux';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {logIn} from '../../state/currentPlayer';

class Login extends Component {

  constructor(props){
    super(props);
    this.state = ({
      name: ''
    })
  }

  onSetUserName = (event) => {
    const userName = event.target.value;
    this.setState({
      name: userName
    })
  };

  onLogIn = () => {
    const {name} = this.state;
    this.props.onLogIn(name);
  }

  render() {
    const { name } = this.state;
    return (
      <div className='login-page'>
        <div className='login-page__header'>
          <h1>MAKAO-REACT</h1>
        </div>
        <div className='login-page__form'>
          <Input value={name} text='Write your name...' onChange={this.onSetUserName}/>
          <Button text='JOIN' onClick={this.onLogIn}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (dispatch) => ({

});

const mapDispatchToProps = (dispatch) => ({
  onLogIn: (name) => dispatch(logIn(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
