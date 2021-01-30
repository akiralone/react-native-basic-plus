interface StateProps {
  theme: 'light' | 'dark';
  textColors?: TextThemeColorProps;
  bgColors?: BgThemeColorProps;
  othersColor?: OthersThemeColorProps;
  dispatch: (action: ActionProps) => void;
}

interface ActionProps {
  type: string;
  value?: any;
}

interface ThemeProps {
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

interface TextColorProps {
  textColor1: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
}

interface TextThemeColorProps {
  light: TextColorProps;
  dark: TextColorProps
}

interface BgColorProps {
  bgColor1: string;
  bgColor2: string;
  bgColor3: string;
  bgColor4: string;
}

interface BgThemeColorProps {
  light: BgColorProps;
  dark: BgColorProps
}

interface OthersColorProps {
  line: string;
  icon: string;
  border: string;
}

interface OthersThemeColorProps {
  light: OthersColorProps;
  dark: OthersColorProps
}