import React from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          {currentUser.avatar && (<img className="profile__avatar" src={currentUser.avatar} alt="аватар" />)}
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__description">{currentUser.about}</p>
          <button className="profile__edit-button" type="button" aria-label="редактировать" onClick={onEditProfile}></button>
        </div>
        <button className="profile__add-button" type="button" aria-label="добавить" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="photos">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />
          ))
          }
        </ul>
      </section>
    </main>
  )
}

export default Main;