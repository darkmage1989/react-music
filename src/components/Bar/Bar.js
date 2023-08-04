import styles from './Bar.module.css'
import Play from '../Play/Play'
import Pause from '../Pause/Pause'
import icons from '../../img/icon/sprite.svg'
import { useThemeContext } from '../../contexts/context'
import { useState, useRef, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { addTrackData } from '../../services/slices/trackSlice'
import { addSongsData } from '../../services/slices/songsSlice'
function Bar() {
  const dispatch = useDispatch()
  const [attrsData] = useSelector((state) => state.track.trackData)
  let songsData = useSelector((state) => state.songsData.songArr)
  const { theme } = useThemeContext()
  const audio = useRef(null)
  const [isPlaying, setPlaying] = useState(false)
  const [isLoop, setLoop] = useState(false)
  let index = +attrsData.indexSong
  if (isPlaying) {
    audio.current.volume = 0.5
  }
  const play = () => {
    audio.current.play()
  }
  const pause = () => {
    audio.current.pause()
  }
  const repeat = () => {
    if (isLoop === false) {
      setLoop(true)
    } else setLoop(false)
  }
  const nextBtn = () => {
    index++
    dispatch(addTrackData({ indexSong: index }))
  }
  const backBtn = () => {
    index--
    dispatch(addTrackData({ indexSong: index }))
  }
  const shuffle = () => {
    songsData = songsData
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
    dispatch(addSongsData({ filteredData: songsData }))
  }
  const progressLine = useRef(null)
  useEffect(() => {
    const allTime = audio.current.duration
    if (isPlaying) {
      window.play = setInterval(() => {
        const curTime = audio.current.currentTime
        if (curTime === allTime) {
          setPlaying(false)
          clearInterval(window.play)
          return
        }
        const procent = (curTime / allTime) * 100
        progressLine.current.style.width = `${procent}%`
      }, 10)
    } else {
      clearInterval(window.play)
    }
  })
  const volume = (event) => {
    const target = event.target.value / 100
    if (isPlaying) {
      audio.current.volume = target
    }
  }
  return (
    <div
      className={[
        `${styles.bar} ${
          theme === 'dark__theme' ? styles.dark__theme : styles.light__theme
        }`
      ]}
    >
      <div className={styles.content}>
        <div
          className={[
            `${styles.player__progress} ${
              theme === 'dark__theme'
                ? styles.dark__theme_bar
                : styles.light__theme_bar
            }`
          ]}
        >
          <div
            className={styles.player__progress__bar}
            ref={progressLine}
          ></div>
        </div>
        <div className={styles.player__block}>
          <div className={styles.player}>
            <div className={styles.player__controls}>
              <div className={styles.player__btn_prev}>
                <svg onClick={backBtn} className={styles.player__btn_prev_svg}>
                  <use
                    xlinkHref={
                      theme === 'dark__theme'
                        ? `${icons}#icon-prev-dark`
                        : `${icons}#icon-prev-light`
                    }
                  ></use>
                </svg>
              </div>
              {isPlaying ? <Pause pause={pause} /> : <Play play={play} />}

              <div className={styles.player__btn_next}>
                <svg onClick={nextBtn} className={styles.player__btn_next_svg}>
                  <use
                    xlinkHref={
                      theme === 'dark__theme'
                        ? `${icons}#icon-next-dark`
                        : `${icons}#icon-next-light`
                    }
                  ></use>
                </svg>
              </div>
              <div className={`${styles.player__btn_repeat} ${'_btn-icon'}`}>
                <svg
                  onClick={repeat}
                  className={styles.player__btn_repeat_svg}
                  alt="repeat"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3L5 0.113249V5.88675L10 3ZM7 14.5C3.96243 14.5 1.5 12.0376 1.5 9H0.5C0.5 12.5899 3.41015 15.5 7 15.5V14.5ZM1.5 9C1.5 5.96243 3.96243 3.5 7 3.5V2.5C3.41015 2.5 0.5 5.41015 0.5 9H1.5Z"
                    fill="#696969"
                  />
                  <path
                    d="M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z"
                    fill="#696969"
                  />
                </svg>
              </div>
              <div
                onClick={shuffle}
                className={`${styles.player__btn_shuffle} ${'_btn-icon'}`}
              >
                <svg
                  className={styles.player__btn_shuffle_svg}
                  alt="shuffle"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 15L14.5 12.1132V17.8868L19.5 15ZM10.1632 12.0833L9.70863 12.2916L10.1632 12.0833ZM7.33683 5.91673L6.8823 6.12505L7.33683 5.91673ZM0.5 3.5H2.79151V2.5H0.5V3.5ZM6.8823 6.12505L9.70863 12.2916L10.6177 11.8749L7.79137 5.7084L6.8823 6.12505ZM14.7085 15.5H15V14.5H14.7085V15.5ZM9.70863 12.2916C10.6047 14.2466 12.5579 15.5 14.7085 15.5V14.5C12.949 14.5 11.3508 13.4745 10.6177 11.8749L9.70863 12.2916ZM2.79151 3.5C4.55105 3.5 6.14918 4.52552 6.8823 6.12505L7.79137 5.7084C6.89533 3.75341 4.94205 2.5 2.79151 2.5V3.5Z"
                    fill="#696969"
                  />
                  <path
                    d="M19.5 3L14.5 5.88675V0.113249L19.5 3ZM10.1632 5.91673L9.70863 5.7084L10.1632 5.91673ZM7.33683 12.0833L6.8823 11.8749L7.33683 12.0833ZM0.5 14.5H2.79151V15.5H0.5V14.5ZM6.8823 11.8749L9.70863 5.7084L10.6177 6.12505L7.79137 12.2916L6.8823 11.8749ZM14.7085 2.5H15V3.5H14.7085V2.5ZM9.70863 5.7084C10.6047 3.75341 12.5579 2.5 14.7085 2.5V3.5C12.949 3.5 11.3508 4.52552 10.6177 6.12505L9.70863 5.7084ZM2.79151 14.5C4.55105 14.5 6.14918 13.4745 6.8823 11.8749L7.79137 12.2916C6.89533 14.2466 4.94205 15.5 2.79151 15.5V14.5Z"
                    fill="#696969"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.player__track_play}>
              <div className={styles.track_play__contain}>
                <div
                  className={[
                    `${styles.track_play__image} ${
                      theme === 'dark__theme'
                        ? styles.dark__theme_bar
                        : styles.light__theme_bar
                    }`
                  ]}
                >
                  <svg
                    className={styles.track_play__svg}
                    alt="music"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 16V1.9697L19 1V13" stroke="#4E4E4E" />
                    <ellipse
                      cx="4.5"
                      cy="16"
                      rx="3.5"
                      ry="2"
                      stroke="#4E4E4E"
                    />
                    <ellipse
                      cx="15.5"
                      cy="13"
                      rx="3.5"
                      ry="2"
                      stroke="#4E4E4E"
                    />
                  </svg>
                </div>
                <audio
                  ref={audio}
                  src={songsData[attrsData.indexSong].track_file}
                  autoPlay={true}
                  loop={isLoop}
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                ></audio>
                <div className={styles.track_play__author}>
                  <a className={styles.track_play__author_link} href="http://">
                    {attrsData.nameSong}
                  </a>
                </div>
                <div className={styles.track_play__album}>
                  <a className={styles.track_play__album_link} href="http://">
                    {attrsData.targetSong}
                  </a>
                </div>
              </div>

              <div className={styles.track_play__like_dis}>
                <div className={`${styles.track_play__like} ${'_btn-icon'}`}>
                  <svg
                    className={styles.track_play__like_svg}
                    alt="like"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.34372 2.25572H8.36529C9.29718 1.44175 11.7563 0.165765 13.9565 1.76734C17.3111 4.20921 14.2458 9.5 8.36529 13H8.34372M8.34378 2.25572H8.32221C7.39032 1.44175 4.93121 0.165765 2.73102 1.76734C-0.623552 4.20921 2.44172 9.5 8.32221 13H8.34378"
                      stroke="#696969"
                    />
                  </svg>
                </div>
                <div className={`${styles.track_play__dislike} ${'_btn-icon'}`}>
                  <svg
                    className={`${styles.track_play__dislike} ${'_btn-icon'}`}
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L15 13.5" stroke="#696969" />
                    <path
                      d="M8.34372 3.25572H8.36529C9.29718 2.44175 11.7563 1.16576 13.9565 2.76734C17.3111 5.20921 14.2458 10.5 8.36529 14H8.34372M8.34378 3.25572H8.32221C7.39032 2.44175 4.93121 1.16576 2.73102 2.76734C-0.623552 5.20921 2.44172 10.5 8.32221 14H8.34378"
                      stroke="#696969"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.volume_block}>
            <div className={styles.volume__content}>
              <div className={styles.volume__image}>
                <svg
                  className={styles.volume__svg}
                  alt="volume"
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_2985_507" fill="white">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 0L3 5H0V13H3L8 18V0Z"
                    />
                  </mask>
                  <path
                    d="M3 5V6H3.41421L3.70711 5.70711L3 5ZM8 0H9V-2.41421L7.29289 -0.707107L8 0ZM0 5V4H-1V5H0ZM0 13H-1V14H0V13ZM3 13L3.70711 12.2929L3.41421 12H3V13ZM8 18L7.29289 18.7071L9 20.4142V18H8ZM3.70711 5.70711L8.70711 0.707107L7.29289 -0.707107L2.29289 4.29289L3.70711 5.70711ZM0 6H3V4H0V6ZM1 13V5H-1V13H1ZM3 12H0V14H3V12ZM8.70711 17.2929L3.70711 12.2929L2.29289 13.7071L7.29289 18.7071L8.70711 17.2929ZM7 0V18H9V0H7Z"
                    fill="white"
                    mask="url(#path-1-inside-1_2985_507)"
                  />
                  <path
                    d="M11 13C12.1046 13 13 11.2091 13 9C13 6.79086 12.1046 5 11 5"
                    stroke="white"
                  />
                </svg>
              </div>
              <div className={`${styles.volume__progress} ${'_btn'}`}>
                <input
                  onChange={volume}
                  className={`${styles.volume__progress_line} ${'_btn'}`}
                  type="range"
                  name="range"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Bar
