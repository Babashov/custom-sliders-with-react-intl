import styles from './styles.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>React Language</div>
      <div className={styles.language}>
        <select name="" id="">
          <option value="">Azerbaycan</option>
          <option value="">Russian</option>
          <option value="">English</option>
        </select>
      </div>
    </div>
  )
}

export default Header