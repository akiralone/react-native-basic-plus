import React, { useReducer, useContext } from 'react';
import ThemeStateContext from './ThemeStateContext';
import reducers from './reducers';
import useColorScheme from '../hooks/useColorSchme';

interface ThemeStateProviderProps {
  textColors?: TextThemeColorProps;
  bgColors?: BgThemeColorProps;
  othersColor?: OthersThemeColorProps;
}

const ThemeStateProvider: React.FC<ThemeStateProviderProps> = ({
  children,
  textColors,
  bgColors,
  othersColor
}) => {
  const initialState = useContext(ThemeStateContext)
  const [state, dispatch] = useReducer(reducers, initialState)
  const theme = useColorScheme()

  return (
    <ThemeStateContext.Provider value={{
      ...state,
      theme,
      textColors,
      bgColors,
      othersColor,
      dispatch: dispatch
    }}>
      {children}
    </ThemeStateContext.Provider>
  )
}

export default ThemeStateProvider;