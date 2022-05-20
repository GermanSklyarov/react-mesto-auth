import logo from '../images/logo.svg';
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

function Header({ linkTo, linkText, loggedIn, onClick, email }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function handleMenuClick() {
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <>
      {loggedIn && isMenuOpened &&
        <div className='header__container header__container_type_mobile'>
          <span className='header__email'>{email}</span>
          <button onClick={onClick} className="header__link header__button">Выйти</button>
        </div>
      }
      <header className="header">
        <img className="header__logo" src={logo} alt="логотип" />
        {!loggedIn && <Link to={linkTo} className='header__link'>{linkText}</Link>}
        {loggedIn &&
          <>
            <div className='header__container'>
              <span className='header__email'>{email}</span>
              <button onClick={onClick} className="header__link header__button">Выйти</button>
            </div>
            <button onClick={handleMenuClick}
              className={`header__button header__button_type_mobile
              ${isMenuOpened ? "header__button_type_close" : "header__button_type_menu"}`}>
            </button>
          </>
        }
      </header>
    </>
  )
}

export default withRouter(Header);