/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux'
import {
  useGetAllFavoriteQuery,
  useGetAllSelectionsQuery,
  useGetAllTracksQuery
} from '../../services/apis'
import styles from '../Dropdown/Dropdown.module.css'
import { useLocation } from 'react-router-dom'
import { addFilterData } from '../../services/slices/filterSlice '
function Author() {
  const dispatch = useDispatch()
  const setAuthorFilter = (event) => {
    const target = event.target
    const author = target.textContent
    dispatch(addFilterData({ author }))
  }
  const location = useLocation()
  const token = useSelector((state) => state.LoginData.access)
  if (location.pathname === '/') {
    let { data } = useGetAllTracksQuery()
    data = data.map((item) => item.author)

    const authors = []

    data.forEach((author) => {
      if (!authors.includes(author) && author.charCodeAt() !== 45) {
        authors.push(author)
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
        {authors.map((item) => (
          <span onClick={setAuthorFilter} className={styles.item} key={item}>
            {item}
          </span>
        ))}
      </div>
    )
  }
  if (location.pathname === '/category/day') {
    let data = useGetAllSelectionsQuery().data
    data = data[0].items
    data = data.map((item) => item.author)
    const authors = []
    data.forEach((author) => {
      if (!authors.includes(author) && author.charCodeAt() !== 45) {
        authors.push(author)
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
        {authors.map((item) => (
          <span onClick={setAuthorFilter} className={styles.item} key={item}>
            {item}
          </span>
        ))}
      </div>
    )
  }
  if (location.pathname === '/category/dance') {
    let data = useGetAllSelectionsQuery().data
    data = data[1].items
    data = data.map((item) => item.author)
    const authors = []
    data.forEach((author) => {
      if (!authors.includes(author) && author.charCodeAt() !== 45) {
        authors.push(author)
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
        {authors.map((item) => (
          <span onClick={setAuthorFilter} className={styles.item} key={item}>
            {item}
          </span>
        ))}
      </div>
    )
  }
  if (location.pathname === '/category/indy') {
    let data = useGetAllSelectionsQuery().data
    data = data[2].items
    data = data.map((item) => item.author)
    const authors = []
    data.forEach((author) => {
      if (!authors.includes(author) && author.charCodeAt() !== 45) {
        authors.push(author)
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
        {authors.map((item) => (
          <span onClick={setAuthorFilter} className={styles.item} key={item}>
            {item}
          </span>
        ))}
      </div>
    )
  }
  if (location.pathname === '/mytracks') {
    let data = useGetAllFavoriteQuery(token).data
    console.log(data)
    data = data.map((item) => item.author)

    const authors = []
    data.forEach((author) => {
      if (!authors.includes(author) && author.charCodeAt() !== 45) {
        authors.push(author)
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
        {authors.map((item) => (
          <span onClick={setAuthorFilter} className={styles.item} key={item}>
            {item}
          </span>
        ))}
      </div>
    )
  }
}
export default Author
