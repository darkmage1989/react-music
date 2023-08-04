/* eslint-disable react/prop-types */
import playlist01 from '../../img/playlist01.png'
import playlist02 from '../../img/playlist02.png'
import playlist03 from '../../img/playlist03.png'
import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'
import { useThemeContext } from '../../contexts/context'
function Sidebar() {
  const { theme } = useThemeContext()
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__personal}>
        <p
          className={[
            `${styles.sidebar__personal_name} ${
              theme === 'dark__theme' ? styles.dark__theme : styles.light__theme
            }`
          ]}
        >
          Sergey.Ivanov
        </p>
        <div className={styles.sidebar__avatar}></div>
      </div>
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} to="category/day">
              <img
                className={styles.sidebar__img}
                src={playlist01}
                alt="day's playlist"
              ></img>
            </Link>
          </div>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} to="category/dance">
              <img
                className={styles.sidebar__img}
                src={playlist02}
                alt="day's playlist"
              ></img>
            </Link>
          </div>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} to="category/indy">
              <img
                className={styles.sidebar__img}
                src={playlist03}
                alt="day's playlist"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
