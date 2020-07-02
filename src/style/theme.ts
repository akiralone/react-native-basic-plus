import { ThemeProps } from "../types";

const colors = {
    whitePrimary: 'rgba(255,255,255,.78)',
    whiteSecondary: 'rgba(255,255,255,.67)',
    whiteTertiary: 'rgba(255,255,255,.38)',
    whiteQuarternary: 'rgba(255,255,255,.38)',
    blackPrimary: '#202020',
    blackSecondary: '#545454',
    blackTertiary: '#bababa',
    blackQuarternary: '#bababa',
    // 'dark' meaning under darkmode
    dark: {
        textPrimary: 'rgba(255,255,255,.78)',
        textSecondary: 'rgba(255,255,255,.67)',
        textTertiary: 'rgba(255,255,255,.45)',
        textQuarternary: 'rgba(255,255,255,.38)',

        bgPrimary: '#121212',
        bgSecondary: '#212121',
        bgTertiary: '#424242',
        bgQuarternary: '#616161',
    },
    // 'light' meaning under lightmode
    light: {
        textPrimary: '#202020',
        textSecondary: '#545454',
        textTertiary: '#bababa',
        textQuarternary: '#bababa',

        bgPrimary: '#fff',
        bgSecondary: '#fafafa',
        bgTertiary: '#f0f0f0',
        bgQuarternary: '#efefef',
    }
}
export const DarkTheme: ThemeProps = {
    background: colors.dark.bgSecondary,
    contentBackgroundColor: colors.dark.bgPrimary,
    border: 'rgb(39, 39, 41)',
    line: 'rgba(255,255,255,.1)',
    icon: 'rgba(255,255,255,.75)',

    largeTitle: colors.whitePrimary,
    title1: colors.whitePrimary,
    title2: colors.whitePrimary,
    title3: colors.whitePrimary,
    headline: colors.whiteSecondary,
    body: colors.whiteSecondary,
    callout: colors.whiteTertiary,
    subhead: colors.whiteTertiary,
    footnote: colors.whiteTertiary,
    caption1: colors.whiteTertiary,
    caption2: colors.whiteTertiary,

    textColor1: colors.dark.textPrimary,
    textColor2: colors.dark.textSecondary,
    textColor3: colors.dark.textTertiary,
    textColor4: colors.dark.textQuarternary,

    bgColor1: colors.dark.bgPrimary,
    bgColor2: colors.dark.bgSecondary,
    bgColor3: colors.dark.bgTertiary,
    bgColor4: colors.dark.bgQuarternary,
}

export const LightTheme: ThemeProps = {
    background: colors.light.bgSecondary,
    contentBackgroundColor: colors.light.bgPrimary,
    border: 'rgb(199, 199, 204)',
    line: '#efefef',
    icon: '#545454',

    largeTitle: colors.blackPrimary,
    title1: colors.blackPrimary,
    title2: colors.blackPrimary,
    title3: colors.blackPrimary,
    headline: colors.blackSecondary,
    body: colors.blackSecondary,
    callout: colors.blackTertiary,
    subhead: colors.blackTertiary,
    footnote: colors.blackTertiary,
    caption1: colors.blackTertiary,
    caption2: colors.blackTertiary,

    textColor1: colors.light.textPrimary,
    textColor2: colors.light.textSecondary,
    textColor3: colors.light.textTertiary,
    textColor4: colors.light.textQuarternary,

    bgColor1: colors.light.bgPrimary,
    bgColor2: colors.light.bgSecondary,
    bgColor3: colors.light.bgTertiary,
    bgColor4: colors.light.bgQuarternary,
}

interface CustomColor {
    light: string;
    dark: string;
}

export const primaryColor: CustomColor = {
    light: colors.blackPrimary,
    dark: colors.whitePrimary
}
export const secondaryColor: CustomColor = {
    light: colors.blackSecondary,
    dark: colors.whiteSecondary
}
export const tertiaryColor: CustomColor = {
    light: colors.blackTertiary,
    dark: colors.whiteTertiary
}

export const textColor1: CustomColor ={
    light: colors.blackPrimary,
    dark: colors.whitePrimary
}

export const textColor2: CustomColor = {
    light: colors.blackSecondary,
    dark: colors.whiteSecondary
}
export const textColor3: CustomColor = {
    light: colors.blackTertiary,
    dark: colors.whiteTertiary
}