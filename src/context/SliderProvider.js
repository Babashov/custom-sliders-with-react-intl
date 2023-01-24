import { createContext,useContext,useState } from "react";

export const SliderContext = createContext()

export const SliderProvider = ({children})=>{
    const localLang = localStorage.getItem('lang')
    const defaultLanguage = localLang ? localLang : navigator.language  
    const [language,setLanguage] = useState(defaultLanguage)

    const values = {
        localLang,
        defaultLanguage,
        language,
        setLanguage
    }
    return <SliderContext.Provider value={values}>{children}</SliderContext.Provider>
}

export const useSlider = ()=>{
    return useContext(SliderContext)
}