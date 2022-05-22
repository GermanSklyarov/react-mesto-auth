import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from './Header.js';
import AuthForm from './AuthForm.js';

class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
        <Header linkTo='/sign-in' linkText='Войти' />
        <h2 className='form__title form__title_type_auth'>Регистрация</h2>
        <AuthForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}
          buttonText="Зарегистрироваться" />
        <p className='register__signin'>Уже зарегистрированы?
          <Link to="/sign-in" className='register__login-link'> Войти</Link>
        </p>
      </div>
    )
  }
}

export default withRouter(Register);