import React, { useMemo } from 'react'
import { View, ViewProps } from 'react-native'
import { useTheme } from '../hooks/useTheme'

interface BlockProps extends ViewProps {
    customColor?: {
        light: string;
        dark: string;
    };
}

const Block: React.FC<BlockProps> = ({
    customColor,
    style,
    children,
    ...rest
}) => {
    const { isDarkMode, theme } = useTheme()
    const backgroundColor = !!customColor ? customColor[theme] : undefined;
    const viewStyle = useMemo(() => !!style
        ? [{ backgroundColor }, style]
        : { backgroundColor }, [isDarkMode, style])

    return (
        <View style={viewStyle} {...rest}>
            {children}
        </View>
    )
}

export default Block;
