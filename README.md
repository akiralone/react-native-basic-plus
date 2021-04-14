<h1 align="center">
  <a href="https://reactnative.dev/">
    React Native Basic Plus
  </a>
</h1>

<p align="center">
  Make it easy to use Text and View on React Native, and support Dark Mode.
</p>


## Installation

```
yarn add react-native-basic-plus
```

## Usage

<details>
  <summary>Basic Use</summary>

```tsx
import React from 'react';
import {
  ThemeStateProvider,
  Container,
  Text
} from 'react-native-basic-plus';

const App = () => {
  return (
    <ThemeStateProvider>
      <Example />
    </ThemeStateProvider>
  );
};

const Example = () => { return (
    <Container>
      <Text largeTitle semibold customColor={{light: '#000', dark: '#fff'}}>LargeTitle 巨大的标题加粗</Text>
      <Text size={30} textColor1 bold>Title1 标题测试</Text>
      <Text size={24} textColor2 medium>Title2 标题测试</Text>
      <Text size={20} textColor3>Title3 标题测试</Text>
    </Container>
  )
}


export default App;

```

</details>

## Components

#### `Container`

name | description | required | type
--- | --- | --- | ---
customColor | custom backgroundColor | false | string

#### `Text`

name | description | required | type
--- | --- | --- | ---
color | custom backgroundColor | false | string
size | fontSize | false | number
textColor1 | font color | false | boolean
textColor2 | font color | false | boolean
textColor3 | font color | false | boolean
textColor4 | font color | false | boolean

## Hooks

#### `useTheme`

```tsx
import React, { useMemo } from 'react';
import { useTheme } from 'react-native-basic-plus';

function Component() {
    const { textColors, bgColors, othersColor, isDarkMode, theme } = useTheme();

    // do something theme style code
    const containerStyle = useMemo(() => ({
      backgroundColor: bgColors.bgColor1[theme]
    }), [theme])

    return (
        <View style={containerStyle}>
          ...
        <View/>
    )
}
```

## Custom Colors

```tsx

import { ThemeStateProvider } from 'react-native-basic-plus';

function Component() {
    const textColors: TextColorProps = { ... }
    const bgColors: BgColorProps = { ... }
    const othersColor: OthersColorProps = { ... }

    return (
        <ThemeStateProvider
          textColors={textColors}
          bgColors={bgColors}
          othersColor={othersColor}>
          ...
        </ThemeStateProvider>
    )
}
```

## To Do

- [x] basic use.
- [ ] add more props and components.

## Author

- [alone](https://twitter.com/amia1one)

## License

MIT