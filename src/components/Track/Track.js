/* eslint-disable no-fallthrough */
/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
import Note from '../Note/Note'
import Like from '../Like/Like'
import styles from './Track.module.css'
import { addTrackData } from '../../services/slices/trackSlice'
import { useThemeContext } from '../../contexts/context'
import { useDispatch, useSelector } from 'react-redux'
import { useGetAllFavoriteQuery } from '../../services/apis'
import Dislike from '../Dislike/Dislike'
import { addSongsData } from '../../services/slices/songsSlice'
function Track({ tracks }) {
  const authorFilter = useSelector((state) => state.filterData.author)
  const genreFilter = useSelector((state) => state.filterData.genre)
  const filterDate = useSelector((state) => state.filterData.filterDate)
  const token = useSelector((state) => state.LoginData.access)
  let likedData = useGetAllFavoriteQuery(token).data
  if (likedData) {
    likedData = likedData.map((e) => e.id)
  }
  const dispatch = useDispatch()
  const setsongIndex = (event) => {
    event.preventDefault()
    const indexSong = event.target.parentElement.dataset.index
    dispatch(addTrackData({ indexSong }))
  }
  let filteredData = tracks.filter((track) => {
    if (authorFilter !== '' && authorFilter !== '0') {
      return track.author === authorFilter
    }
    if (genreFilter !== '' && genreFilter !== '0') {
      return track.genre === genreFilter
    }
    return track
  })
  switch (filterDate) {
    case 'younger':
      filteredData = filteredData.filter((year) => year.release_date !== null)
      filteredData = filteredData.toSorted((a, b) =>
        +a.release_date.split('-')[0] > +b.release_date.split('-')[0] ? -1 : 1
      )

      break
    case 'older':
      filteredData = filteredData.filter((year) => year.release_date !== null)
      filteredData = filteredData.toSorted((a, b) =>
        +a.release_date.split('-')[0] < +b.release_date.split('-')[0] ? -1 : 1
      )
      break
  }
  const { theme } = useThemeContext()
  if (filteredData.length) {
    dispatch(addSongsData({ filteredData }))
  }

  return (
    <div className={styles.playlist__item}>
      {filteredData.map((track, index) => (
        <div
          key={track.id}
          className={styles.playlist__track}
        >
          <div className={styles.track__title}>
            <div
              className={[
                `${styles.track__title_image} ${
                  theme === 'dark__theme'
                    ? styles.dark__theme_image
                    : styles.light__theme_image
                }`
              ]}
            >
              <Note />
            </div>
            <div>
              <a
                onClick={setsongIndex}
                className={styles.track__title_link}
                data-index={index}
              >
                <span
                  className={[
                    `${styles.track__title_span} ${
                      theme === 'dark__theme'
                        ? styles.dark__theme
                        : styles.light__theme
                    }`
                  ]}
                >
                  {track.name}
                </span>
              </a>
            </div>
          </div>
          <div className={styles.track__author}>
            <a
              className={[
                `${styles.track__author_link} ${
                  theme === 'dark__theme'
                    ? styles.dark__theme
                    : styles.light__theme
                }`
              ]}
              href="http://"
            >
              {track.author}
            </a>
          </div>
          <div className={styles.track__album}>
            <a className={styles.track__album_link} href="http://">
              {track.album}
            </a>
          </div>
          <div>
            {likedData ? (
              likedData.includes(+track.id) ? (
                <Dislike />
              ) : (
                <Like />
              )
            ) : (
              <></>
            )}
            <span className={styles.track__time_text}>
              {(track.duration_in_seconds / 60).toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Track
