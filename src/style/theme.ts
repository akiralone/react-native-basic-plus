import { ThemeProps } from "../types";

const customColors = {
    whitePrimary: 'rgba(255,255,255,.78)',
    whiteSecondary: 'rgba(255,255,255,.67)',
    whiteTertiary: 'rgba(255,255,255,.38)',
    blackPrimary: '#333',
    blackSecondary: '#737373',
    blackTertiary: '#b3b2b2',
}
export const DarkTheme: ThemeProps = {
    background: '#222',
    contentBackgroundColor: '#000',
    border: 'rgb(39, 39, 41)',
    line: '#222',
    icon: 'rgba(255,255,255,.75)',

    largeTitle: customColors.whitePrimary,
    title1: customColors.whitePrimary,
    title2: customColors.whitePrimary,
    title3: customColors.whitePrimary,
    headline: customColors.whiteSecondary,
    body: customColors.whiteSecondary,
    callout: customColors.whiteTertiary,
    subhead: customColors.whiteTertiary,
    footnote: customColors.whiteTertiary,
    caption1: customColors.whiteTertiary,
    caption2: customColors.whiteTertiary,
}

export const LightTheme: ThemeProps = {
    background: '#f0f0f0',
    contentBackgroundColor: '#fff',
    border: 'rgb(199, 199, 204)',
    line: '#f0f0f0',
    icon: '#545454',

    largeTitle: customColors.blackPrimary,
    title1: customColors.blackPrimary,
    title2: customColors.blackPrimary,
    title3: customColors.blackPrimary,
    headline: customColors.blackSecondary,
    body: customColors.blackSecondary,
    callout: customColors.blackTertiary,
    subhead: customColors.blackTertiary,
    footnote: customColors.blackTertiary,
    caption1: customColors.blackTertiary,
    caption2: customColors.blackTertiary,
}