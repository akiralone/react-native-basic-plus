export interface StateProps {
    theme: 'light' | 'dark';
    dispatch: (action: ActionProps) => void;
}

export interface ActionProps {
    type: string;
    value?: any;
}

export interface ThemeProps {
    background: string;
    contentBackgroundColor: string;
    border: string;
    line: string;
    icon: string;

    largeTitle: string;
    title1: string;
    title2: string;
    title3: string;
    headline: string;
    body: string;
    callout: string;
    subhead: string;
    footnote: string;
    caption1: string;
    caption2: string;
}