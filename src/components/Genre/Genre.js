import styles from '../Dropdown/Dropdown.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  useGetAllFavoriteQuery,
  useGetAllSelectionsQuery,
  useGetAllTracksQuery
} from '../../services/apis'
import { useLocation } from 'react-router-dom'
import { addFilterData } from '../../services/slices/filterSlice '
function Genre() {
  const dispatch = useDispatch()
  const setGenreFilter = (event) => {
    const target = event.target
    const genre = target.textContent
    dispatch(addFilterData({ genre }))
  }
  const location = useLocation()
  const token = useSelector((state) => state.LoginData.access)
  if (location.pathname === '/') {
    let { data } = useGetAllTracksQuery()
    data = data.map((item) => item.genre)

    const genres = []

    data.forEach((genre) => {
      if (!genres.includes(genre) && genre.charCodeAt() !== 45) {
        genres.push(genre)
      }
    })
    return (
      <div
        className={styles.dropdown}
        style={{
          position: 'absolute',
          top: '50px',
          left: '110px'
        }}
      >
        {genres.map((item) => (
          <span onClick={setGenreFilter} className={styles.item} key={item}>
            {item}
          </span>
        ))}
      </div>
    )
  }
  if (location.pathname === '/category/day') {
    let data = useGetAllSelectionsQuery().data
    data = data[0].items
    data = data.map((item) => item.genre)
    const genres = []
    data.forEach((genre) => {
      if (!genres.includes(genre) && genre.charCodeAt() !== 45) {
        genres.push(genre)
      }
    })
    return (
      <div
        className={styles.dropdown}
        style={{
          position: 'absolute',
          top: '50px',
          left: '110px'
        }}
      >
        {genres.map((item) => (
          <span onClick={setGenreFilter} className={styles.item} key={item}>
            {item}
          </span>
        ))}
      </div>
    )
  }
  if (location.pathname === '/category/dance') {
    let data = useGetAllSelectionsQuery().data
    data = data[1].items
    data = data.map((item) => item.genre)
    const genres = []
    data.forEach((genre) => {
      if (!genres.includes(genre) && genre.charCodeAt() !== 45) {
        genres.push(genre)
      }
    })
    return (
      <div
        className={styles.dropdown}
        style={{
          position: 'absolute',
          top: '50px',
          left: '110px'
        }}
      >
        {genres.map((item) => (
          <span onClick={setGenreFilter} className={styles.item} key={item}>
            {item}
          </span>
        ))}
      </div>
    )
  }
  if (location.pathname === '/category/indy') {
    let data = useGetAllSelectionsQuery().data
    data = data[2].items
    data = data.map((item) => item.genre)
    const genres = []
    data.forEach((genre) => {
      if (!genres.includes(genre) && genre.charCodeAt() !== 45) {
        genres.push(genre)
      }
    })
    return (
      <div
        className={styles.dropdown}
        style={{
          position: 'absolute',
          top: '50px',
          left: '110px'
        }}
      >
        {genres.map((item) => (
          <span onClick={setGenreFilter} className={styles.item} key={item}>
            {item}
          </span>
        ))}
      </div>
    )
  }
  if (location.pathname === '/mytracks') {
    let data = useGetAllFavoriteQuery(token).data
    const genres = []
    data = data.map((item) => item.genre)
    data.forEach((genre) => {
      if (!genres.includes(genre) && genre.charCodeAt() !== 45) {
        genres.push(genre)
      }
    })
    return (
      <div
        className={styles.dropdown}
        style={{
          position: 'absolute',
          top: '50px',
          left: '110px'
        }}
      >
        {genres.map((item) => (
          <span onClick={setGenreFilter} className={styles.item} key={item}>
            {item}
          </span>
        ))}
      </div>
    )
  }
}
export default Genre
