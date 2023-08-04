/* eslint-disable react/prop-types */
import styles from '../../components/Bar/Bar.module.css'
import icons from '../../img/icon/sprite.svg'
import { useThemeContext } from '../../contexts/context'
function Play(playProps) {
  const { theme } = useThemeContext()
  return (
    <div
      onClick={playProps.play}
      className={`${styles.player__btn_play} ${'_btn'}`}
    >
      <svg className={styles.player__btn_play_svg}>
        <use
          xlinkHref={
            theme === 'dark__theme'
              ? `${icons}#icon-play-dark`
              : `${icons}#icon-play-light`
          }
        ></use>
      </svg>
    </div>
  )
}
export default Play
