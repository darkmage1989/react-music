/* eslint-disable react/prop-types */
import styles from '../../components/Bar/Bar.module.css'
import icons from '../../img/icon/sprite.svg'
import { useThemeContext } from '../../contexts/context'
function Pause(pauseProps) {
  const { theme } = useThemeContext()
  return (
    <div
      onClick={pauseProps.pause}
      className={`${styles.player__btn_play} ${'_btn'}`}
    >
      <svg className={styles.player__btn_play_svg}>
        <use xlinkHref={
            theme === 'dark__theme'
              ? `${icons}#icon-pause-dark`
              : `${icons}#icon-pause-light`
          }></use>
      </svg>
    </div>
  )
}
export default Pause
