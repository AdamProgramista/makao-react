import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './style.css';
import Input from '../../components/input';
import Button from '../../components/button';
import { logIn } from '../../state/current-player';

class Login extends PureComponent {

  constructor(props){
    super(props);
    this.state = ({
      name: ''
    });
  }

  onSetUserName = (event) => {
    const userName = event.target.value;
    this.setState({
      name: userName
    });
  };

  onLogIn = () => {
    const { name } = this.state;
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
          <Input value={name} placeholder='Write your name...' onChange={this.onSetUserName}/>
          <Button text='LOG IN' onClick={this.onLogIn}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  onLogIn: (name) => dispatch(logIn(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
