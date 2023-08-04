import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle'
import Playlist from '../PlayList/Playlist'
import styles from './Centerblock.module.css'
import { useThemeContext } from '../../contexts/context'
function Centerblock() {
  const { theme } = useThemeContext()
  return (
    <div className={styles.main__centerblock}>
      <Search />
      <h2
        className={[
          `${styles.centerblock__h2} ${
            theme === 'dark__theme' ? styles.dark__theme : styles.light__theme
          }`
        ]}
      >
        Треки
      </h2>
      <Filter />
      <div className={styles.centerblock__content}>
        <PlaylistTitle />
        <Playlist />
      </div>
    </div>
  )
}

export default Centerblock
