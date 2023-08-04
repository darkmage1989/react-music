import { useState } from 'react'
import styles from './Burger.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useThemeContext } from '../../contexts/context'
import icons from '../../img/icon/sprite.svg'
import { useRefreshTokenMutation } from '../../services/apis'
import { useDispatch, useSelector } from 'react-redux'
import { addLoginData } from '../../services/slices/loginSlice '
const Burger = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useSelector((state) => state.LoginData)
  const [refresh] = useRefreshTokenMutation()
  const { theme } = useThemeContext()
  const { toogleTheme } = useThemeContext()
  const [visible, setVisible] = useState(true)
  const toggleVisibility = () => setVisible(!visible)
  const refreshToken = () => {
    const formData = new FormData()
    formData.append('refresh', token.refresh)
    refresh(formData).then((data) => {
      const { access } = data.data
      console.log(data.data)
      dispatch(addLoginData({ access }))
      navigate('/mytracks')
    })
  }
  return (
    <>
      <div onClick={toggleVisibility} className={styles.burger}>
        <span
          className={[
            `${styles.burger__line} ${
              theme === 'dark__theme'
                ? styles.dark__theme__line
                : styles.light__theme__line
            }`
          ]}
        ></span>
        <span
          className={[
            `${styles.burger__line} ${
              theme === 'dark__theme'
                ? styles.dark__theme__line
                : styles.light__theme__line
            }`
          ]}
        ></span>
        <span
          className={[
            `${styles.burger__line} ${
              theme === 'dark__theme'
                ? styles.dark__theme__line
                : styles.light__theme__line
            }`
          ]}
        ></span>
      </div>
      {!visible && (
        <div className={styles.nav__menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <Link
                className={[
                  `${styles.menu__link} ${
                    theme === 'dark__theme'
                      ? styles.dark__theme__link
                      : styles.light__theme__link
                  }`
                ]}
                to="/"
              >
                Главная
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link
                onClick={refreshToken}
                className={[
                  `${styles.menu__link} ${
                    theme === 'dark__theme'
                      ? styles.dark__theme__link
                      : styles.light__theme__link
                  }`
                ]}
                to="/mytracks"
              >
                Мой плейлист
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link
                className={[
                  `${styles.menu__link} ${
                    theme === 'dark__theme'
                      ? styles.dark__theme__link
                      : styles.light__theme__link
                  }`
                ]}
                to="/login"
              >
                Войти
              </Link>
            </li>
            <li>
              <svg onClick={toogleTheme} className={styles.player__btn_turn}>
                <use
                  xlinkHref={
                    theme === 'dark__theme'
                      ? `${icons}#icon-turn-night`
                      : `${icons}#icon-turn-light`
                  }
                ></use>
              </svg>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
export default Burger
