import styles from './styles.module.css'
import { useState,useEffect } from 'react'

function Header() {

  const localLang = localStorage.getItem('lang')
  const defaultLanguage = localLang ? localLang : navigator.language
  const [language,setLanguage] = useState(defaultLanguage)

  useEffect(()=>{
    localStorage.setItem('lang',language)
  },[language])

  return (
    <div className={styles.header}>
      <div className={styles.logo}>React Language</div>
      <div className={styles.language}>
        <select value={language} name="language" id="language" onChange={(e)=>setLanguage(e.target.value)}>
          <option value="az-AZ">Azerbaycan</option>
          <option value="ru-RU">Russian</option>
          <option value="en-US">English</option>
        </select>
      </div>
    </div>
  )
}

export default Header