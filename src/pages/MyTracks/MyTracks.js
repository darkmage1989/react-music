import Nav from '../../components/Nav/Nav'
import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter'
import PlaylistTitle from '../../components/PlaylistTitle/PlaylistTitle'
import Playlist from '../../components/PlayList/Playlist'
import Bar from '../../components/Bar/Bar'
import styles from './MyTracks.module.css'
import { useSelector } from 'react-redux'
function MyTracks() {
  const [songData] = useSelector((state) => state.track.trackData)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Nav />
        <div className={styles.main__centerblock}>
          <Search />
          <h2 className={styles.centerblock__h2}>Мои треки</h2>
          <Filter />
          <div className={styles.centerblock__content}>
            <PlaylistTitle />
            <Playlist />
          </div>
        </div>
      </main>
      {songData.indexSong === '' ? <></> : <Bar />}
      <footer className="footer"></footer>
    </div>
  )
}
export default MyTracks
