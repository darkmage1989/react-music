import { useState } from 'react'
import Author from '../Author/Author'
import Year from '../Year/Year'
import Genre from '../Genre/Genre'
import styles from './Filter.module.css'
import { useThemeContext } from '../../contexts/context'
import { useDispatch } from 'react-redux'
import { addFilterData } from '../../services/slices/filterSlice '
function Filter() {
  const dispatch = useDispatch()
  const dropFilter = () => {
    const filterDate = '0'
    const genre = '0'
    const author = '0'
    dispatch(addFilterData({ filterDate, genre, author }))
  }
  const { theme } = useThemeContext()
  const [visibleFilter, setVisibleFilter] = useState(null)
  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }
  return (
    <div className={styles.filter}>
      <div
        className={[
          `${styles.title} ${
            theme === 'dark__theme'
              ? styles.dark__theme__text
              : styles.light__theme__text
          }`
        ]}
      >
        Искать по:
      </div>
      <div
        onClick={() => toggleVisibleFilter('author')}
        className={`${styles.filter__button} ${styles.btn_text} ${
          visibleFilter === 'author' ? styles.filter__active : styles.btn_text
        } ${
          theme === 'dark__theme' ? styles.dark__theme : styles.light__theme
        }`}
      >
        исполнителю
      </div>
      {visibleFilter === 'author' && <Author />}
      <div
        onClick={() => toggleVisibleFilter('year')}
        className={`${styles.filter__button} ${styles.btn_text} ${
          visibleFilter === 'year' ? styles.filter__active : styles.btn_text
        } ${
          theme === 'dark__theme' ? styles.dark__theme : styles.light__theme
        }`}
      >
        году выпуска
      </div>
      {visibleFilter === 'year' && <Year />}

      <div
        onClick={() => toggleVisibleFilter('genre')}
        className={`${styles.filter__button} ${styles.btn_text} ${
          visibleFilter === 'genre' ? styles.filter__active : styles.btn_text
        } ${
          theme === 'dark__theme' ? styles.dark__theme : styles.light__theme
        }`}
      >
        жанру
      </div>
      <div>
        <button
          onClick={dropFilter}
          className={`${styles.filter__button__drope} ${styles.btn_text} ${
            visibleFilter === 'genre' ? styles.filter__active : styles.btn_text
          } ${
            theme === 'dark__theme' ? styles.dark__theme : styles.light__theme
          }`}
        >
          Сбросить фильтры
        </button>
      </div>
      {visibleFilter === 'genre' && <Genre />}
    </div>
  )
}

export default Filter
