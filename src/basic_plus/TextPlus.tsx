import React, { useMemo } from 'react'
import { Platform, Text, TextProps } from 'react-native'
import { generatorFontSize, isMiUi12 } from '../helpers'
import { useTheme } from '../hooks/useTheme'

interface TextPlusProps extends TextProps {
  textColor1?: boolean;
  textColor2?: boolean;
  textColor3?: boolean;
  textColor4?: boolean;
  color?: string;
  medium?: boolean;
  bold?: boolean;
  size?: number;
  marginTop?: number;
  marginBottom?: number;
}

const TextPlus: React.FC<TextPlusProps> = ({
  children,
  style,
  textColor1,
  textColor2,
  textColor3,
  textColor4,
  color,
  medium,
  bold,
  size,
  marginTop,
  marginBottom,
  ...rest }) => {
  const { textColors, theme } = useTheme()
  const isAndroid = useMemo(() => Platform.OS === 'android', [])
  const textStyle = useMemo(() => {
    return ([
      textColor1 && { color: textColors.textColor1 },
      textColor2 && { color: textColors.textColor2 },
      textColor3 && { color: textColors.textColor3 },
      textColor4 && { color: textColors.textColor4 },
      !!color && { color },
      medium && { fontWeight: !isAndroid ? '500' as '500' : '600' as '600' },
      bold && { fontWeight: !isAndroid ? '700' as '700' : 'bold' as 'bold' },
      !!size && generatorFontSize(size),
      !!marginTop && { marginTop },
      !!marginBottom && { marginBottom },
      isMiUi12() && { fontFamily: '' },
      style
    ])
  }, [theme])

  return (
    <Text
      style={textStyle}
      allowFontScaling={false}
      {...rest}>
      {children}
    </Text>
  )
}

export default TextPlus
