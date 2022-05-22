import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header.js';
import AuthForm from './AuthForm.js';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.props.handleSubmit.bind(this);

  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className='login'>
        <Header linkTo='/sign-up' linkText='Регистрация' />
        <h2 className='form__title form__title_type_auth'>Вход</h2>
        <AuthForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} buttonText="Войти" />
      </div>
    )
  }
}

export default withRouter(Login);