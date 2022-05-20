import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `${isOwn ? 'photos__delete-button' : 'photos__delete-button_hidden'}`
  );
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `photos__like-button ${isLiked && "photos__like-button_active"}`;

  function handleClick() {
    onCardClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="photos__element">
      <img className="photos__photo" src={card.link} alt={card.name} onClick={handleClick} />
      <button className={cardDeleteButtonClassName} type="button" aria-label="удалить" onClick={handleDeleteClick}></button>
      <div className="photos__photo-caption">
        <h2 className="photos__photo-title">{card.name}</h2>
        <div className="photos__like-container">
          <button className={cardLikeButtonClassName} type="button" aria-label="лайк" onClick={handleLikeClick}></button>
          <span className="photos__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export default Card;