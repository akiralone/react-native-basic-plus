import React, { useMemo } from 'react';
import { View, ViewProps } from 'react-native';
import { useTheme } from '../hooks/useTheme';

interface CustomViewProps extends ViewProps {
    customColor?: {
        light: string;
        dark: string;
    };
}

const CustomView: React.FC<CustomViewProps> = ({
    customColor,
    style,
    children,
    ...rest
}) => {
    const { isDarkMode, theme } = useTheme();
    const backgroundColor = customColor ? customColor[theme] : undefined;
    const viewStyle = useMemo(() => !!style
        ? [{ backgroundColor }, style]
        : { backgroundColor }, [isDarkMode, style]);

    return (
        <View style={viewStyle} {...rest}>
            {children}
        </View>
    )
}

export default CustomView;
