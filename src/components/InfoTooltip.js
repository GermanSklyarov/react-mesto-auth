function InfoTooltip({ isOpen, message, image, onClose }) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <div style={{ backgroundImage: `url(${image})` }} className="info-tool-tip__image"></div>
        <h2 className="form__title info-tool-tip__title">{message}</h2>
        <button className="popup__close" type="button" aria-label="закрыть" onClick={onClose}></button>
      </div>
    </div>
  )
}

export default InfoTooltip;