import { useState, useEffect } from 'react'
import Note from '../Note/Note'
import Like from '../Like/Like'
import MyLoader from '../Skeleton/Skeleton'
import styles from './Playlist.module.css'

function Playlist() {
  const data = {
    name: [
      'Guilt',
      'Elektro',
      'I’m Fire',
      'Non Stop',
      'Run Run',
      'Eyes on Fire',
      'Mucho Bien',
      'Calvin Harris, Disciples',
      'Morena ',
    ],
    notes: <Note />,
    likes: <Like />,
    author: [
      'Nero',
      'Dynoro, Outwork, Mr. Gee',
      'Ali Bakgor',
      'Стоункат, Psychopath',
      'Jaded, Will Clarke, AR/CO',
      'Blue Foundation, Zeds Dead',
      'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
      'minthaze',
      'Calvin Harris, Disciples',
    ],
    albom: [
      'Welcome Reality',
      'Elektro',
      'I’m Fire',
      'Non Stop',
      'Run Run',
      'Eyes on Fire',
      'Mucho Bien',
      'Captivating',
      'How Deep Is Your Love',
    ],
    time: [
      '4:44',
      '2:22',
      '2:22',
      '4:12',
      '2:54',
      '5:20',
      '3:41',
      '1:48',
      '3:32',
    ],
  }
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const skeletonTImer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(skeletonTImer)
  }, [])
  return (
    <div className={styles.playlist}>
      <div className={styles.playlist__item}>
        <div className={styles.playlist__track}>
          <div className={styles.track__title}>
            <div className={styles.track__title_image}>
              {isLoading ? <MyLoader /> : <Note />}
            </div>
            <div>
              <a className={styles.track__title_link} href="http://">
                {isLoading ? <MyLoader /> : data.name[1]}{' '}
                <span className={styles.track__title_span}></span>
              </a>
            </div>
          </div>
          <div className={styles.track__author}>
            <a className={styles.track__author_link} href="http://">
              {isLoading ? <MyLoader /> : data.author[1]}
            </a>
          </div>
          <div className={styles.track__album}>
            <a className={styles.track__album_link} href="http://">
              {isLoading ? <MyLoader /> : data.albom[1]}
            </a>
          </div>
          <div>
            {isLoading ? <MyLoader /> : data.likes}
            <span className={styles.track__time_text}>
              {isLoading ? <MyLoader /> : data.time[1]}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.playlist__item}>
        <div className={styles.playlist__track}>
          <div className={styles.track__title}>
            <div className={styles.track__title_image}>
              {isLoading ? <MyLoader /> : <Note />}
            </div>
            <div>
              <a className={styles.track__title_link} href="http://">
                {isLoading ? <MyLoader /> : data.name[2]}{' '}
                <span className={styles.track__title_span}></span>
              </a>
            </div>
          </div>
          <div className={styles.track__author}>
            <a className={styles.track__author_link} href="http://">
              {isLoading ? <MyLoader /> : data.author[2]}
            </a>
          </div>
          <div className={styles.track__album}>
            <a className={styles.track__album_link} href="http://">
              {isLoading ? <MyLoader /> : data.albom[2]}
            </a>
          </div>
          <div>
            {isLoading ? <MyLoader /> : data.likes}
            <span className={styles.track__time_text}>
              {isLoading ? <MyLoader /> : data.time[2]}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.playlist__item}>
        <div className={styles.playlist__track}>
          <div className={styles.track__title}>
            <div className={styles.track__title_image}>
              {isLoading ? <MyLoader /> : <Note />}
            </div>
            <div>
              <a className={styles.track__title_link} href="http://">
                {isLoading ? <MyLoader /> : data.name[3]}{' '}
                <span className={styles.track__title_span}></span>
              </a>
            </div>
          </div>
          <div className={styles.track__author}>
            <a className={styles.track__author_link} href="http://">
              {isLoading ? <MyLoader /> : data.author[3]}
            </a>
          </div>
          <div className={styles.track__album}>
            <a className={styles.track__album_link} href="http://">
              {isLoading ? <MyLoader /> : data.albom[3]}
            </a>
          </div>
          <div>
            {isLoading ? <MyLoader /> : data.likes}
            <span className={styles.track__time_text}>
              {isLoading ? <MyLoader /> : data.time[3]}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.playlist__item}>
        <div className={styles.playlist__track}>
          <div className={styles.track__title}>
            <div className={styles.track__title_image}>
              {isLoading ? <MyLoader /> : <Note />}
            </div>
            <div>
              <a className={styles.track__title_link} href="http://">
                {isLoading ? <MyLoader /> : data.name[4]}{' '}
                <span className={styles.track__title_span}></span>
              </a>
            </div>
          </div>
          <div className={styles.track__author}>
            <a className={styles.track__author_link} href="http://">
              {isLoading ? <MyLoader /> : data.author[4]}
            </a>
          </div>
          <div className={styles.track__album}>
            <a className={styles.track__album_link} href="http://">
              {isLoading ? <MyLoader /> : data.albom[4]}
            </a>
          </div>
          <div>
            {isLoading ? <MyLoader /> : data.likes}
            <span className={styles.track__time_text}>
              {isLoading ? <MyLoader /> : data.time[4]}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.playlist__item}>
        <div className={styles.playlist__track}>
          <div className={styles.track__title}>
            <div className={styles.track__title_image}>
              {isLoading ? <MyLoader /> : <Note />}
            </div>
            <div>
              <a className={styles.track__title_link} href="http://">
                {isLoading ? <MyLoader /> : data.name[5]}{' '}
                <span className={styles.track__title_span}></span>
              </a>
            </div>
          </div>
          <div className={styles.track__author}>
            <a className={styles.track__author_link} href="http://">
              {isLoading ? <MyLoader /> : data.author[5]}
            </a>
          </div>
          <div className={styles.track__album}>
            <a className={styles.track__album_link} href="http://">
              {isLoading ? <MyLoader /> : data.albom[5]}
            </a>
          </div>
          <div>
            {isLoading ? <MyLoader /> : data.likes}
            <span className={styles.track__time_text}>
              {isLoading ? <MyLoader /> : data.time[5]}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.playlist__item}>
        <div className={styles.playlist__track}>
          <div className={styles.track__title}>
            <div className={styles.track__title_image}>
              {isLoading ? <MyLoader /> : <Note />}
            </div>
            <div>
              <a className={styles.track__title_link} href="http://">
                {isLoading ? <MyLoader /> : data.name[6]}{' '}
                <span className={styles.track__title_span}></span>
              </a>
            </div>
          </div>
          <div className={styles.track__author}>
            <a className={styles.track__author_link} href="http://">
              {isLoading ? <MyLoader /> : data.author[6]}
            </a>
          </div>
          <div className={styles.track__album}>
            <a className={styles.track__album_link} href="http://">
              {isLoading ? <MyLoader /> : data.albom[6]}
            </a>
          </div>
          <div>
            {isLoading ? <MyLoader /> : data.likes}
            <span className={styles.track__time_text}>
              {isLoading ? <MyLoader /> : data.time[6]}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.playlist__item}>
        <div className={styles.playlist__track}>
          <div className={styles.track__title}>
            <div className={styles.track__title_image}>
              {isLoading ? <MyLoader /> : <Note />}
            </div>
            <div>
              <a className={styles.track__title_link} href="http://">
                {isLoading ? <MyLoader /> : data.name[7]}{' '}
                <span className={styles.track__title_span}></span>
              </a>
            </div>
          </div>
          <div className={styles.track__author}>
            <a className={styles.track__author_link} href="http://">
              {isLoading ? <MyLoader /> : data.author[7]}
            </a>
          </div>
          <div className={styles.track__album}>
            <a className={styles.track__album_link} href="http://">
              {isLoading ? <MyLoader /> : data.albom[7]}
            </a>
          </div>
          <div>
            {isLoading ? <MyLoader /> : data.likes}
            <span className={styles.track__time_text}>
              {isLoading ? <MyLoader /> : data.time[7]}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.playlist__item}>
        <div className={styles.playlist__track}>
          <div className={styles.track__title}>
            <div className={styles.track__title_image}>
              {isLoading ? <MyLoader /> : <Note />}
            </div>
            <div>
              <a className={styles.track__title_link} href="http://">
                {isLoading ? <MyLoader /> : data.name[8]}{' '}
                <span className={styles.track__title_span}></span>
              </a>
            </div>
          </div>
          <div className={styles.track__author}>
            <a className={styles.track__author_link} href="http://">
              {isLoading ? <MyLoader /> : data.author[8]}
            </a>
          </div>
          <div className={styles.track__album}>
            <a className={styles.track__album_link} href="http://">
              {isLoading ? <MyLoader /> : data.albom[8]}
            </a>
          </div>
          <div>
            {isLoading ? <MyLoader /> : data.likes}
            <span className={styles.track__time_text}>
              {isLoading ? <MyLoader /> : data.time[8]}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.playlist__item}>
        <div className={styles.playlist__track}>
          <div className={styles.track__title}>
            <div className={styles.track__title_image}>
              {isLoading ? <MyLoader /> : <Note />}
            </div>
            <div>
              <a className={styles.track__title_link} href="http://">
                {isLoading ? <MyLoader /> : data.name[9]}{' '}
                <span className={styles.track__title_span}></span>
              </a>
            </div>
          </div>
          <div className={styles.track__author}>
            <a className={styles.track__author_link} href="http://">
              {isLoading ? <MyLoader /> : data.author[9]}
            </a>
          </div>
          <div className={styles.track__album}>
            <a className={styles.track__album_link} href="http://">
              {isLoading ? <MyLoader /> : data.albom[9]}
            </a>
          </div>
          <div>
            {isLoading ? <MyLoader /> : data.likes}
            <span className={styles.track__time_text}>
              {isLoading ? <MyLoader /> : data.time[9]}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Playlist
