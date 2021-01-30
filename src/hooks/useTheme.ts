import { useContext, useMemo } from "react";
import ThemeStateContext from "../state/ThemeStateContext";
import { defaultTextColors, defaultBgColors, defaultOthersColor } from "../style";

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
    const _isDarkMode = useMemo(() => theme === 'dark', [theme])

    return {
        theme,
        setTheme,
        isDarkMode: _isDarkMode,
        textColors: _textColors[theme],
        bgColors: _bgColors[theme],
        othersColor: _othersColor[theme]
    }
}