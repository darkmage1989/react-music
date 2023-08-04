import styles from './Playlist.module.css'
import ContentLoader from 'react-content-loader'
import Track from '../Track/Track'
import {
  useGetAllFavoriteQuery,
  useGetAllSelectionsQuery,
  useGetAllTracksQuery
} from '../../services/apis'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Playlist() {
  const token = useSelector((state) => state.LoginData.access)
  const location = useLocation()
  if (location.pathname === '/') {
    const { data, error, isLoading } = useGetAllTracksQuery()
    const isEmptyList = !isLoading && !data?.length
    if (isLoading) {
      return (
        <p>
          <ContentLoader />
        </p>
      )
    }
    if (error) {
      return <p>{error.message}</p>
    }
    if (isEmptyList) {
      return <p>No songs, yay!</p>
    }
    return (
      <div className={styles.playlist}>
        <Track tracks={data} />
      </div>
    )
  }
  if (location.pathname === '/category/day') {
    const { data, error, isLoading } = useGetAllSelectionsQuery()
    const isEmptyList = !isLoading && !data?.length
    if (isLoading) {
      return (
        <p>
          <ContentLoader />
        </p>
      )
    }
    if (error) {
      return <p>{error.message}</p>
    }
    if (isEmptyList) {
      return <p>No songs, yay!</p>
    }
    return (
      <div className={styles.playlist}>
        <Track tracks={data[0].items} />
      </div>
    )
  }
  if (location.pathname === '/category/dance') {
    const { data, error, isLoading } = useGetAllSelectionsQuery()
    const isEmptyList = !isLoading && !data?.length
    if (isLoading) {
      return (
        <p>
          <ContentLoader />
        </p>
      )
    }
    if (error) {
      return <p>{error.message}</p>
    }
    if (isEmptyList) {
      return <p>No songs, yay!</p>
    }
    return (
      <div className={styles.playlist}>
        <Track tracks={data[1].items} />
      </div>
    )
  }
  if (location.pathname === '/category/indy') {
    const { data, error, isLoading } = useGetAllSelectionsQuery()
    const isEmptyList = !isLoading && !data?.length
    if (isLoading) {
      return (
        <p>
          <ContentLoader />
        </p>
      )
    }
    if (error) {
      return <p>{error.message}</p>
    }
    if (isEmptyList) {
      return <p>No songs, yay!</p>
    }
    return (
      <div className={styles.playlist}>
        <Track tracks={data[2].items} />
      </div>
    )
  }
  if (location.pathname === '/mytracks') {
    const { data, error, isLoading } = useGetAllFavoriteQuery(token)
    const isEmptyList = !isLoading && !data?.length
    if (isLoading) {
      return (
        <p>
          <ContentLoader />
        </p>
      )
    }
    if (error) {
      return <p>{error.message}</p>
    }
    if (isEmptyList) {
      return <p>No songs, yay!</p>
    }
    return (
      <div className={styles.playlist}>
        <Track tracks={data} />
      </div>
    )
  }
}
export default Playlist
