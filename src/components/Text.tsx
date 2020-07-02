import React from 'react';
import { Text, TextProps, TextStyle, Platform } from 'react-native';
import { human, systemWeights, sanFranciscoSpacing, sanFranciscoWeights } from 'react-native-typography';
import { useTheme } from '../hooks/useTheme';
import { primaryColor, secondaryColor, tertiaryColor } from '../style/theme';

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
    medium?: boolean;
    semibold?: boolean;
    bold?: boolean;
    color?: string;
    customColor?: {
        light: string;
        dark: string;
    };
    size10?: boolean;
    size11?: boolean;
    size12?: boolean;
    size13?: boolean;
    size14?: boolean;
    size15?: boolean;
    size16?: boolean;
    size17?: boolean;
    size18?: boolean;
    size19?: boolean;
    size20?: boolean;
    size21?: boolean;
    size22?: boolean;
    size23?: boolean;
    size24?: boolean;
    size25?: boolean;
    size26?: boolean;
    size27?: boolean;
    size28?: boolean;
    size29?: boolean;
    size30?: boolean;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    textColor1?: boolean;
    textColor2?: boolean;
    textColor3?: boolean;
    textColor4?: boolean;
}

function generatorFontStyle(style: string): TextStyle {
    const { colors } = useTheme();

    return {
        ...human[style],
        color: colors[style]
    }
}

const getLineHeightBySize = {
    10: 11,
    11: 13,
    12: 16,
    13: 18,
    14: 19,
    15: 20,
    16: 21,
    17: 22,
    18: 23,
    19: 24,
    20: 25,
    21: 27,
    22: 28,
    23: 29,
    24: 30,
    25: 31,
    26: 32,
    27: 33,
    28: 35,
    29: 36,
    30: 37,
}

function generatorFontSize(size: number): TextStyle {
    return {
        fontSize: size,
        lineHeight: getLineHeightBySize[size],
        letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(size) : undefined,
    }
}

const getFontWeightByName = {
    thin: Platform.OS === 'ios' ? '100' : '200',
    light: Platform.OS === 'ios' ? '300' : '400',
    regular: Platform.OS === 'ios' ? '400' : '500',
    medium: Platform.OS === 'ios' ? '500' : '600',
    semibold: Platform.OS === 'ios' ? '600' : '700',
    bold: Platform.OS === 'ios' ? '700' : 'bold'
}

type FontWeightNameProps = keyof typeof getFontWeightByName

function generatorFontWeight(name: FontWeightNameProps): TextStyle {
    return {
        //@ts-ignore
        fontWeight: getFontWeightByName[name]
    }
}

const Typography: React.FunctionComponent<TypographyProps> = (props) => {
    const { theme, colors } = useTheme();
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
        medium,
        semibold,
        bold,
        size10,
        size11,
        size12,
        size13,
        size14,
        size15,
        size16,
        size17,
        size18,
        size19,
        size20,
        size21,
        size22,
        size23,
        size24,
        size25,
        size26,
        size27,
        size28,
        size29,
        size30,
        primary,
        secondary,
        tertiary,
        textColor1,
        textColor2,
        textColor3,
        textColor4,
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
        size10 && generatorFontSize(10),
        size11 && generatorFontSize(11),
        size12 && generatorFontSize(12),
        size13 && generatorFontSize(13),
        size14 && generatorFontSize(14),
        size15 && generatorFontSize(15),
        size16 && generatorFontSize(16),
        size17 && generatorFontSize(17),
        size18 && generatorFontSize(18),
        size19 && generatorFontSize(19),
        size20 && generatorFontSize(20),
        size21 && generatorFontSize(21),
        size22 && generatorFontSize(22),
        size23 && generatorFontSize(23),
        size24 && generatorFontSize(24),
        size25 && generatorFontSize(25),
        size26 && generatorFontSize(26),
        size27 && generatorFontSize(27),
        size28 && generatorFontSize(28),
        size29 && generatorFontSize(29),
        size30 && generatorFontSize(30),
        primary && { color: primaryColor[theme] },
        secondary && { color: secondaryColor[theme] },
        tertiary && { color: tertiaryColor[theme] },
        textColor1 && { color: colors.textColor1 },
        textColor2 && { color: colors.textColor2 },
        textColor3 && { color: colors.textColor3 },
        textColor4 && { color: colors.textColor4 },
        thin && generatorFontWeight('thin'),
        light && generatorFontWeight('light'),
        regular && generatorFontWeight('regular'),
        medium && generatorFontWeight('medium'),
        semibold && generatorFontWeight('semibold'),
        bold && generatorFontWeight('bold'),
        color && { color: color },
        !!customColor && { color: customColor[theme] },
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