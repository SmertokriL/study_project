import React, {FC, useState} from 'react';
import {ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext} from "../lib/themeContext";

const ThemeProvider:FC = ({children}) => {

    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme || ETheme.LIGHT

    const [theme, setTheme] = useState<ETheme>(defaultTheme)


    //todo мемоизировать объект

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;