import styles from './styles.module.css'
import { useEffect } from 'react'
import {IntlProvider, FormattedMessage} from 'react-intl'
import { useSlider } from '../context/SliderProvider'

const translationMsg = {
  "az-AZ":{
    title:'React Coxlu Dil'
  },

  "ru-RU":{
    title:'React Язык'
  },

  "en-US":{
    title:'React Language'
  }
}


function Header() {

  const {language,setLanguage} = useSlider()


  useEffect(()=>{
    localStorage.setItem('lang',language)
  },[language])

  return (
    <IntlProvider locale={language} messages={translationMsg[language]}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <FormattedMessage id='title'/>
        </div>
        <div className={styles.language}>
          <select value={language} name="language" id="language" onChange={(e)=>setLanguage(e.target.value)}>
            <option value="az-AZ">Azerbaycan</option>
            <option value="ru-RU">Russian</option>
            <option value="en-US">English</option>
          </select>
        </div>
      </div>
    </IntlProvider>
  )
}

export default Header