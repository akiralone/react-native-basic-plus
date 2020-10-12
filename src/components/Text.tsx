import React from 'react';
import { Text, TextProps, TextStyle, Platform } from 'react-native';
import { useTheme } from '../hooks/useTheme';

interface TypographyProps extends TextProps {
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
    marginTop?: number;
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

const getLineHeightBySize = {
    10: 11,
    11: 13,
    12: 16,
    13: 21,
    14: 22,
    15: 23,
    16: 24,
    17: 25,
    18: 26,
    19: 27,
    20: 28,
    21: 29,
    22: 28,
    23: 29,
    24: 33,
    25: 34,
    26: 35,
    27: 36,
    28: 37,
    29: 38,
    30: 39,
}

function generatorFontSize(size: number): TextStyle {
    return {
        fontSize: size,
        lineHeight: getLineHeightBySize[size]
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
        thin,
        light,
        regular,
        medium,
        semibold,
        bold,
        marginTop,
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
        primary && { color: colors.textColor1 },
        secondary && { color: colors.textColor2 },
        tertiary && { color: colors.textColor3 },
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
        marginTop && { marginTop: marginTop },
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