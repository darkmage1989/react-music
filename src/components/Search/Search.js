/* eslint-disable react/prop-types */
/* eslint-disable multiline-ternary */
import styles from './Search.module.css'
import icons from '../../img/icon/sprite.svg'
import { useThemeContext } from '../../contexts/context'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addTrackData } from '../../services/slices/trackSlice'
function Suggest({ props }) {
  const dispatch = useDispatch()
  const setSongIndex = (event) => {
    event.preventDefault()
    const indexSong = event.target.dataset.index
    console.log(indexSong)
    dispatch(addTrackData({ indexSong }))
  }
  const { theme } = useThemeContext()
  let songsData = useSelector((state) => state.songsData.songArr)
  if (!songsData.length) {
    return <></>
  }
  songsData = songsData.filter(
    (song) =>
      song.name.toLowerCase().includes(props) ||
      song.author.toLowerCase().includes(props)
  )
  return (
    <div className={styles.suggest}>
      {songsData.map((song, index) => (
        <span
          onClick={setSongIndex}
          key={song.id}
          data-index={index}
          className={[
            `${styles.search__text} ${
              theme === 'dark__theme' ? styles.dark__theme : styles.light__theme
            }`
          ]}
        >
          {`${song.author} - ${song.name} `}
        </span>
      ))}
    </div>
  )
}
function Search() {
  const [handleSearch, setSearch] = useState('')
  const { theme } = useThemeContext()

  const searchFunc = (event) => {
    const inputValue = event.target.value.toLowerCase()
    setSearch(inputValue)
  }
  return (
    <div className={styles.search}>
      <svg className={styles.search__svg}>
        {theme === 'dark__theme' ? (
          <use xlinkHref={`${icons}#icon-search`}></use>
        ) : (
          <use xlinkHref={`${icons}#icon-search-dark`}></use>
        )}
      </svg>
      <input
        onInput={searchFunc}
        className={[
          `${styles.search__text} ${
            theme === 'dark__theme' ? styles.dark__theme : styles.light__theme
          }`
        ]}
        type="search"
        placeholder="Поиск"
        name="search"
      ></input>
      {handleSearch !== '' ? <Suggest props={handleSearch} /> : <></>}
    </div>
  )
}

export default Search
