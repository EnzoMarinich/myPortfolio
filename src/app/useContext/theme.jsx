const { createContext, useContext, useState } = require("react");


export const themeDarkContext = createContext()

// export const useThemeDarkContext = ()=>{
//     return useContext(themeDarkContext)
// }

export const ThemeProvider = ({children})=>{
    const [themeDark, setThemeDark]= useState(true)

    const handleTheme = ()=>{
        setThemeDark((prev)=>!prev)
    }

    return(
        <themeDarkContext.Provider value={{themeDark, handleTheme}}>
            {children}
        </themeDarkContext.Provider>
    )
    
}