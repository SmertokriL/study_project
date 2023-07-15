import {ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext} from "./themeContext";
import {useContext} from "react";

export interface UseThemeResult {
    toggleTheme: () => void;
    theme: ETheme
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme, toggleTheme}

}