import logo from '../../img/logo.png'
import logoDark from '../../img/logo__light.png'
import Burger from '../Burger/Burger'
import styles from './Nav.module.css'
import { useThemeContext } from '../../contexts/context'
function Nav() {
  const { theme } = useThemeContext()
  return (
    <nav
      className={[
        `${styles.nav} ${
          theme === 'dark__theme' ? styles.dark__theme : styles.light__theme
        }`
      ]}
    >
      <div className={styles.logo}>
        <img
          className={styles.image}
          src={theme === 'dark__theme' ? logo : logoDark}
          alt="logo"
        ></img>
      </div>
      <Burger />
    </nav>
  )
}
export default Nav
