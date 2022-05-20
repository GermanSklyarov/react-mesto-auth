import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = React.useRef();
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <PopupWithForm title="Обновить аватар" id="edit-avatar" isOpen={isOpen} onClose={onClose} buttonText="Сохранить"
      onSubmit={handleSubmit}>
      <input type="url" name="avatar" id="url-avatar" className="form__input" placeholder="Ссылка на картинку"
        ref={inputRef} required />
      <span className="url-avatar-error form__input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;