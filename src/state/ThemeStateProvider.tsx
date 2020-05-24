import React, { useReducer, useContext } from 'react';
import { useDarkMode } from 'react-native-dark-mode';
import ThemeStateContext from './ThemeStateContext';
import reducers from './reducers';

const ThemeStateProvider: React.FC = ({ children }) => {
    const initialState = useContext(ThemeStateContext)
    const [state, dispatch] = useReducer(reducers, initialState)
    const isDarkMode = useDarkMode()

    return (
        <ThemeStateContext.Provider value={{
            ...state,
            theme: isDarkMode ? 'dark' : 'light',
            dispatch: dispatch
        }}>
            {children}
        </ThemeStateContext.Provider>
    )
}

export default ThemeStateProvider;