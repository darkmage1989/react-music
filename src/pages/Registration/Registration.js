import styles from '../Registration/Registration.module.css'
import logo from '../../img/logo__light.png'
import { useSignUpMutation } from '../../services/apis'
import { useNavigate } from 'react-router-dom'
function Registration() {
  const navigate = useNavigate()
  const [SignUp] = useSignUpMutation()
  const registration = (event) => {
    event.preventDefault()
    const form = document.getElementById('formSignUp').elements
    const formData = new FormData()
    Array.from(form).forEach((element) => {
      const { name, value } = element
      if (name !== '' && value !== '') {
        formData.append(name, value)
      }
    })
    SignUp(formData)
    navigate('/login')
  }
  return (
    <div className={styles.registration}>
      <form
        className={styles.registration__container}
        id="formSignUp"
        onSubmit={registration}
      >
        <img className={styles.registration__logo} src={logo} alt="logo"></img>
        <input
          name="username"
          className={styles.registration__input}
          placeholder="Логин"
        ></input>
        <input
          name="email"
          className={styles.registration__input}
          placeholder="Адрес электронной почты"
          type="mail"
        ></input>
        <input
          name="password"
          className={styles.registration__input}
          placeholder="пароль"
          type="password"
        ></input>
        <button className={styles.registration__button}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  )
}
export default Registration
