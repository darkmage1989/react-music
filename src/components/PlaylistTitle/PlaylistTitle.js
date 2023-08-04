import styles from './PlaylistTitle.module.css'
function PlaylistTitle(params) {
  return (
    <div className= {styles.content__title}>
      <div className={`${styles.playlist_title__col} ${styles.col01}`}>Трек</div>
      <div className={`${styles.playlist_title__col} ${styles.col02}`}>ИСПОЛНИТЕЛЬ</div>
      <div className={`${styles.playlist_title__col} ${styles.col03}`}>АЛЬБОМ</div>
      <div className={`${styles.playlist_title__col} ${styles.col04}`}>
        <svg
          className={styles.playlist_title__svg}
          alt="time"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6" cy="6" r="5.5" stroke="#696969" />
          <path d="M4 6H6.5V2.5" stroke="#696969" />
        </svg>
      </div>
    </div>
  )
}

export default PlaylistTitle
