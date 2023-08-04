import styles from './NotFound.module.css'
function NotFound() {
  return (
    <div>
      <div className={styles.error__container}>
        <h1 className={styles.error__title}>404 not found</h1>
      </div>
    </div>
  )
}
export default NotFound
