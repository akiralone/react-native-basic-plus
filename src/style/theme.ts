import { ThemeProps } from "../types";

const colors = {
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
        textSecondary: '#737373',
        textTertiary: '#bababa',
        textQuarternary: '#efefef',

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

export const bg1: CustomColor = {
    light: colors.light.bgPrimary,
    dark: colors.dark.bgPrimary
}
export const bg2: CustomColor = {
    light: colors.light.bgSecondary,
    dark: colors.dark.bgSecondary
}
export const bg3: CustomColor = {
    light: colors.light.bgTertiary,
    dark: colors.dark.bgTertiary
}
export const bg4: CustomColor = {
    light: colors.light.bgQuarternary,
    dark: colors.dark.bgQuarternary
}

export const textColor1: CustomColor ={
    light: colors.light.textPrimary,
    dark: colors.light.textPrimary
}

export const textColor2: CustomColor = {
    light: colors.light.textSecondary,
    dark: colors.dark.textSecondary
}
export const textColor3: CustomColor = {
    light: colors.light.textTertiary,
    dark: colors.dark.textTertiary
}
export const textColor4: CustomColor = {
    light: colors.light.textQuarternary,
    dark: colors.dark.textQuarternary
}