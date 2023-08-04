/* eslint-disable react/prop-types */
import styles from '../Login/Login.module.css'
import logo from '../../img/logo__light.png'
import { addLoginData } from '../../services/slices/loginSlice '
import { useNavigate } from 'react-router-dom'
import { useLogInMutation, useGetTokenMutation } from '../../services/apis'
import { useDispatch } from 'react-redux'
function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const registrationClick = () => {
    navigate('/Registration')
  }
  const [logIn] = useLogInMutation()
  const [token] = useGetTokenMutation()
  const loginForm = (event) => {
    event.preventDefault()
    const form = document.getElementById('formLogIn').elements
    const formData = new FormData()
    Array.from(form).forEach((element) => {
      const { name, value } = element
      if (name !== '' && value !== '') {
        formData.append(name, value)
      }
    })
    logIn(formData)
    token(formData).then((data) => {
      const { access, refresh } = data.data
      dispatch(addLoginData({ access, refresh }))
      navigate('/')
    })
  }
  return (
    <div className={styles.login}>
      <form
        id="formLogIn"
        onSubmit={loginForm}
        className={styles.login__container}
      >
        <img className={styles.login__logo} src={logo} alt="logo"></img>
        <input
          name="password"
          className={styles.login__input}
          placeholder="Пароль"
          type="password"
        ></input>
        <input
          name="email"
          type="email"
          className={styles.login__input}
          placeholder="Почта"
        ></input>
        <button className={styles.login__button}>Войти</button>
        <button
          onClick={registrationClick}
          className={styles.login__registration}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  )
}
export default Login
