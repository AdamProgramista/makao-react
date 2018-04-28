import React, { Component } from 'react';
import './Login.css';
import Input from './../Input/Input'
import Button from './../Button/Button'

class Login extends Component {
  render() {
    return (
      <div className='login-page'>
        <div className='login-page__header'>
          <h1>MAKAO-REACT</h1>
        </div>
        <div className='login-page__form'>
          <Input text='Write your name...'/>
          <Button text='JOIN'/>
        </div>
      </div>
    );
  }
}

export default Login;