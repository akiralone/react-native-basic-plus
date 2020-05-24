import React, { useMemo } from 'react';
import { View, ViewProps, SafeAreaView } from 'react-native';
import { useTheme } from '../hooks/useTheme';

interface ContainerProps extends ViewProps {
    safe?: boolean;
    customColor?: {
        light: string;
        dark: string;
    };
}

const Container: React.FC<ContainerProps> = ({
    safe = false,
    customColor,
    children,
    style,
    ...rest }) => {
    const { colors, isDarkMode, theme } = useTheme();
    const backgroundColor = customColor ? customColor[theme] : colors.background;
    const viewStyle = useMemo(() => !!style
        ? [{ backgroundColor, flex: 1 }, style]
        : { backgroundColor, flex: 1 }, [isDarkMode, style]);

    return (
        safe
            ? <View style={viewStyle} {...rest}>
                <SafeAreaView>
                    {children}
                </SafeAreaView>
            </View>
            : <View style={viewStyle} {...rest}>
                {children}
            </View>
    )
}

export default Container;
