import React, { useState } from 'react'
import { GlobalContext } from './GlobalContext'

const GlobalContextProvider = (prop: any) => {
    const [currentSectionInView, setCurrentSectionInView] = useState(["home"]);
    return (
        <GlobalContext.Provider value={{ currentSectionInView, setCurrentSectionInView }}>
            {prop.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider
