import styles from './styles.module.css'
import { useState } from 'react'
import { IntlProvider,FormattedMessage } from 'react-intl'
import { useSlider } from '../context/SliderProvider'

function Slider() {
  const {sliders} = useSlider()
  const [slider,setSlider] = useState(0)

  const {language} = useSlider()

  return (
    <IntlProvider messages={sliders[slider][language]} locale={language}>
      <div className={styles.sliders}>
        <div className={styles.slider}>
          <button 
            onClick={(e)=>setSlider((prevState)=> (slider) === (sliders.length - 1) ? 0 : prevState+1)} 
            className={styles.arrowRight}
          >
              {'>'}
          </button>

          <button 
            onClick={(e)=>setSlider((prevState)=>slider === 0 ? (sliders.length - 1) : prevState-1)} 
            className={styles.arrowLeft}
          >
            {'<'}
          </button>
          <span className={styles.sliderDescription}>
            <FormattedMessage id='desc'/>
          </span>
          <img 
            src={sliders[slider].url}
            alt='Image 01'
            width='1200px'
            height='700px'
          />
        </div>
      </div>
    </IntlProvider>
  )
}

export default Slider