import React, { useReducer, useContext } from 'react';
import ThemeStateContext from './ThemeStateContext';
import reducers from './reducers';
import useColorScheme from '../hooks/useColorSchme';

const ThemeStateProvider: React.FC = ({ children }) => {
    const initialState = useContext(ThemeStateContext)
    const [state, dispatch] = useReducer(reducers, initialState)
    const theme = useColorScheme()

    return (
        <ThemeStateContext.Provider value={{
            ...state,
            theme,
            dispatch: dispatch
        }}>
            {children}
        </ThemeStateContext.Provider>
    )
}

export default ThemeStateProvider;