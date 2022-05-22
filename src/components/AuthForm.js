function AuthForm({ handleSubmit, handleChange, buttonText }) {
  return (
    <form onSubmit={handleSubmit} className="login__form">
      <input className='form__input form__input_type_auth' id="email" required name="email"
        type="email" placeholder='Email' onChange={handleChange} />
      <input className='form__input form__input_type_auth' id="password" required name="password"
        type="password" placeholder='Пароль' onChange={handleChange} />
      <button type="submit" className="form__submit form__submit_type_auth">{buttonText}</button>
    </form>
  )
}

export default AuthForm;