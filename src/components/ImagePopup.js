function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_photo ${card && "popup_opened"}`}>
      <div className="popup__photo-container">
        <figure className="popup__figure">
          <img className="popup__photo" src={card?.link} alt={card?.name} />
          <figcaption className="popup__photo-caption">{card?.name}</figcaption>
        </figure>
        <button className="popup__close" type="button" aria-label="закрыть" onClick={onClose}></button>
      </div>
    </div>
  )
}

export default ImagePopup;