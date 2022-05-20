function PopupWithForm({ title, id, isOpen, onClose, buttonText, children, onSubmit }) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`} id={id}>
      <div className="popup__container">
        <h2 className="form__title">{title}</h2>
        <form className="form" name={`${id}-form`} onSubmit={onSubmit} noValidate>
          {children}
          <input type="submit" className="form__submit" value={buttonText} />
        </form>
        <button className="popup__close" type="button" aria-label="закрыть" onClick={onClose}></button>
      </div>
    </div>
  )
}

export default PopupWithForm;