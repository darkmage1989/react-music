import Nav from '../../components/Nav/Nav'
import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter'
import PlaylistTitle from '../../components/PlaylistTitle/PlaylistTitle'
import Playlist from '../../components/PlayList/Playlist'
import Bar from '../../components/Bar/Bar'
import styles from './Category.module.css'
import PATH from '../../constans/PATH'
import { useParams, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Category() {
  const [songData] = useSelector((state) => state.track.trackData)
  const params = useParams()
  const pathUrl = PATH.find((pathUrl) => pathUrl.url === params.url)
  if (!pathUrl) {
    return <Navigate to={'/'} replace={true} />
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Nav />
        <div className={styles.main__centerblock}>
          <Search />
          <h2 className={styles.centerblock__h2}>{pathUrl.name}</h2>
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
export default Category
