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

    textColor1: string;
    textColor2: string;
    textColor3: string;
    textColor4: string;

    bgColor1: string;
    bgColor2: string;
    bgColor3: string;
    bgColor4: string;
}