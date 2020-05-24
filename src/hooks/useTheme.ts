import { useContext } from "react";
import ThemeStateContext from "../state/ThemeStateContext";
import { DarkTheme, LightTheme } from "../style/theme";

export function useTheme() {
    const { theme, dispatch } = useContext(ThemeStateContext);
    const setTheme = (str: 'light' | 'dark') => {
        dispatch({
            type: 'SET_THEME',
            value: str
        })
    }

    return {
        isDarkMode: theme === 'dark',
        theme,
        colors: theme === 'dark' ? DarkTheme : LightTheme,
        setTheme
    }
}