import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from './Header.js';
import InfoToolTip from './InfoTooltip.js';
import * as auth from '../auth.js';
import successImage from '../images/success.svg';
import errorImage from '../images/error.svg';

class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isInfoToolTipOpen: false,
      image: successImage,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeInfoToolTip = this.closeInfoToolTip.bind(this);
  }

  closeInfoToolTip() {
    this.setState({
      isInfoToolTipOpen: false
    }, () => {
      if (this.state.image === successImage) {
        this.props.history.push('/sign-in');
      }
    })
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { password, email } = this.state;
    auth.register(password, email).then((res) => {
      if (res) {
        this.setState({
          isInfoToolTipOpen: true,
          image: successImage,
          message: 'Вы успешно зарегистрировались!'
        }, () => {

        });
      } else {
        this.setState({
          isInfoToolTipOpen: true,
          image: errorImage,
          message: 'Что-то пошло не так! Попробуйте ещё раз.'
        });
      }
    });
  }
  render() {
    return (
      <div className='login'>
        <Header linkTo='/sign-in' linkText='Войти' />
        <h2 className='form__title form__title_type_auth'>Регистрация</h2>
        <form onSubmit={this.handleSubmit} className="login__form">
          <input className='form__input form__input_type_auth' id="email" required name="email"
            type="email" placeholder='Email' value={this.state.email} onChange={this.handleChange} />
          <input className='form__input form__input_type_auth' id="password" required name="password"
            type="password" placeholder='Пароль' value={this.state.password} onChange={this.handleChange} />
          <button type="submit" className="form__submit form__submit_type_auth">Зарегистрироваться</button>
          <p className='register__signin'>Уже зарегистрированы?
            <Link to="/sign-in" className='register__login-link'> Войти</Link>
          </p>
        </form>
        <InfoToolTip isOpen={this.state.isInfoToolTipOpen} message={this.state.message}
          image={this.state.image} onClose={this.closeInfoToolTip} />
      </div>
    )
  }
}

export default withRouter(Register);