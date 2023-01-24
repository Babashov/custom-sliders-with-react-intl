import { createContext,useContext,useState } from "react";

export const SliderContext = createContext()


const sliders = [
    {
      url:'https://images.unsplash.com/photo-1591534180437-507029f6ee60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80',
      'az-AZ':{
        desc:'Birinci Aciqlama'
      },
      'ru-RU':{
        desc:'Первое описание'
      },
      'en-US':{
        desc:'First Description'
      },
    },
    {
      url:'https://images.unsplash.com/photo-1554830310-5b57379d04e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      'az-AZ':{
        desc:'Ikinci Aciqlama'
      },
      'ru-RU':{
        desc:'Второе описание'
      },
      'en-US':{
        desc:'Second Description'
      },
    },
    {
      url:'https://images.unsplash.com/photo-1569000971870-7605f9bd8734?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      
      'az-AZ':{
        desc:'Ucuncu Aciqlama'
      },
      'ru-RU':{
        desc:'Третье описание'
      },
      'en-US':{
        desc:'Third Description'
      },
  
    },
    {
      url:'https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
      
      'az-AZ':{
        desc:'Dorduncu Aciqlama'
      },
      'ru-RU':{
        desc:'Четвертое описание'
      },
      'en-US':{
        desc:'Fourth Description'
      },
    }
  ]

export const SliderProvider = ({children})=>{
    const localLang = localStorage.getItem('lang')
    const defaultLanguage = localLang ? localLang : navigator.language  
    const [language,setLanguage] = useState(defaultLanguage)

    const values = {
        localLang,
        defaultLanguage,
        language,
        setLanguage,
        sliders
    }
    return <SliderContext.Provider value={values}>{children}</SliderContext.Provider>
}

export const useSlider = ()=>{
    return useContext(SliderContext)
}