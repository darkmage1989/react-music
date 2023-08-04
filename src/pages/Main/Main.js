import Nav from '../../components/Nav/Nav'
import Centerblock from '../../components/Centralblock/Centerblock'
import Sidebar from '../../components/Sidebar/Sidebar'
import Bar from '../../components/Bar/Bar'
import styles from './Main.module.css'
import PATH from '../../constans/PATH'
import { useThemeContext } from '../../contexts/context'
import { useSelector } from 'react-redux'
function Main() {
  const [songData] = useSelector((state) => state.track.trackData)
  const { theme } = useThemeContext()
  return (
    <div
      className={[
        `${styles.container} ${
          theme === 'dark__theme' ? styles.dark__theme : styles.light__theme
        }`
      ]}
    >
      <main className={styles.main}>
        <Nav />
        <Centerblock />
        <Sidebar path={PATH} />
      </main>
      {songData.indexSong === '' ? <></> : <Bar />}
      <footer className="footer"></footer>
    </div>
  )
}
export default Main
