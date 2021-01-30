import React, { useMemo } from 'react'
import { View, ViewProps } from 'react-native'
import { useTheme } from '../hooks/useTheme'

interface LineProps extends ViewProps {
  height?: number;
}

const Line = ({ height, style, ...rest}: LineProps) => {
  const { colors, theme } = useTheme()
  const lineStyle = useMemo(() => ([
    {
      backgroundColor: colors[theme].line,
      height: height || 1
    },
    style
  ]), [theme])
  
  return (
    <View style={lineStyle} {...rest}/>
  )
}

export default Line
