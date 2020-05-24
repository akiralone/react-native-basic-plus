import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { human, systemWeights } from 'react-native-typography';
import { useTheme } from '../hooks/useTheme';

interface TypographyProps extends TextProps {
    largeTitle?: boolean;
    title1?: boolean;
    title2?: boolean;
    title3?: boolean;
    headline?: boolean;
    body?: boolean;
    callout?: boolean;
    subhead?: boolean;
    footnote?: boolean;
    caption1?: boolean;
    caption2?: boolean;
    thin?: boolean;
    light?: boolean;
    regular?: boolean;
    semibold?: boolean;
    bold?: boolean;
    color?: string;
    customColor?: {
        light: string;
        dark: string;
    };
}

function generatorFontStyle(style: string): TextStyle {
    const { colors } = useTheme();

    return {
        ...human[style],
        color: colors[style]
    }
}

const Typography: React.FunctionComponent<TypographyProps> = (props) => {
    const { theme } = useTheme();
    const {
        largeTitle,
        title1,
        title2,
        title3,
        headline,
        body,
        callout,
        subhead,
        footnote,
        caption1,
        caption2,
        thin,
        light,
        regular,
        semibold,
        bold,
        color,
        customColor,
        children,
        style,
        ...rest } = props;

    const textStyle: Array<TextStyle | any> = [
        largeTitle && generatorFontStyle('largeTitle'),
        title1 && generatorFontStyle('title1'),
        title2 && generatorFontStyle('title2'),
        title3 && generatorFontStyle('title3'),
        headline && generatorFontStyle('headline'),
        body && generatorFontStyle('body'),
        callout && generatorFontStyle('callout'),
        subhead && generatorFontStyle('subhead'),
        footnote && generatorFontStyle('footnote'),
        caption1 && generatorFontStyle('caption1'),
        caption2 && generatorFontStyle('caption2'),
        thin && systemWeights.thin,
        light && systemWeights.light,
        regular && systemWeights.regular,
        semibold && systemWeights.semibold,
        bold && systemWeights.bold,
        color && { color: color },
        customColor && { color: customColor[theme] },
        style && style
    ]

    return (
        <Text
            style={textStyle}
            allowFontScaling={false}
            {...rest}>
            {children}
        </Text>
    )
}

export default Typography;