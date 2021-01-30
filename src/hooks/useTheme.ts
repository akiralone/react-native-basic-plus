import { useContext, useMemo } from "react";
import ThemeStateContext from "../state/ThemeStateContext";
import { defaultTextColors, defaultBgColors, defaultOthersColor } from "../style";
import { DarkTheme, LightTheme } from "../style/theme";

export function useTheme() {
    const { theme, textColors, bgColors, othersColor, dispatch } = useContext(ThemeStateContext)
    const setTheme = (str: 'light' | 'dark') => {
        dispatch({
            type: 'SET_THEME',
            value: str
        })
    }
    const _textColors = useMemo(() => textColors || defaultTextColors, [])
    const _bgColors = useMemo(() => bgColors || defaultBgColors, [])
    const _othersColor = useMemo(() => othersColor || defaultOthersColor, [])

    return {
        isDarkMode: theme === 'dark',
        theme,
        colors: theme === 'dark' ? DarkTheme : LightTheme,
        textColors: _textColors[theme],
        bgColors: _bgColors[theme],
        othersColor: _othersColor[theme],
        setTheme
    }
}