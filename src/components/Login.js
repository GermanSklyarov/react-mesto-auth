import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header.js';
import * as auth from '../auth.js';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.email || !this.state.password) {
      return;
    }
    auth.authorize(this.state.password, this.state.email)
      .then((data) => {
        if (data.token) {
          this.setState({
            email: '',
            password: ''
          }, () => {
            this.props.handleLogin();
            this.props.history.push('/');
          })
        }
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className='login'>
        <Header linkTo='/sign-up' linkText='Регистрация' />
        <h2 className='form__title form__title_type_auth'>Вход</h2>
        <form onSubmit={this.handleSubmit} className="login__form">
          <input className='form__input form__input_type_auth' id="email" required name="email"
            type="email" placeholder='Email' value={this.state.email} onChange={this.handleChange} />
          <input className='form__input form__input_type_auth' id="password" required name="password"
            type="password" placeholder='Пароль' value={this.state.password} onChange={this.handleChange} />
          <button type="submit" className="form__submit form__submit_type_auth">Войти</button>
        </form>
      </div>
    )
  }
}

export default withRouter(Login);