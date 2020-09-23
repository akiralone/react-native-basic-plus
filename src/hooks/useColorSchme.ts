import { useColorScheme as _useColorScheme } from "react-native";

const useColorScheme = (): 'light' | 'dark' => {
  const theme = _useColorScheme()

  return theme || 'light'
}

export default useColorScheme;