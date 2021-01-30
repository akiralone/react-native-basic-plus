export interface StateProps {
  theme: 'light' | 'dark';
  textColors?: TextThemeColorProps;
  bgColors?: BgThemeColorProps;
  othersColor?: OthersThemeColorProps;
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

export interface TextColorProps {
  textColor1: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
}

export interface TextThemeColorProps {
  light: TextColorProps;
  dark: TextColorProps
}

export interface BgColorProps {
  bgColor1: string;
  bgColor2: string;
  bgColor3: string;
  bgColor4: string;
}

export interface BgThemeColorProps {
  light: BgColorProps;
  dark: BgColorProps
}

export interface OthersColorProps {
  line: string;
  icon: string;
  border: string;
}

export interface OthersThemeColorProps {
  light: OthersColorProps;
  dark: OthersColorProps
}