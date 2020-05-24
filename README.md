# React Native Basic Plus

Make it easy to use Text and View on React Native, and support Dark Mode.

## Installation

```
yarn add react-native-basic-plus
# or
npm install react-native-basic-plus
```

> Also, you need to install [react-native-dark-mode](https://github.com/codemotionapps/react-native-dark-mode), and follow the installation instructions.

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
    <Container safe>
      <Text largeTitle semibold customColor={{light: '#000', dark: '#fff'}}>LargeTitle 巨大的标题加粗</Text>
      <Text title1>Title1 标题测试</Text>
      <Text title2>Title2 标题测试</Text>
      <Text title3>Title3 标题测试</Text>
      <Text headline bold>Headline 标题测试</Text>
      <Text body>Body 标题测试</Text>
      <Text callout>Callout 标题测试</Text>
      <Text footnote>Footnote 标题测试</Text>
      <Text caption1>Caption1 标题测试</Text>
      <Text caption2>Caption2 标题测试</Text>
    </Container>
  )
}


export default App;

```

</details>

## Components

#### `Container`

name | description | required | default
--- | --- | --- | ---
safe | use [SafeAreaView](https://reactnative.dev/docs/safeareaview) component | false | false
customColor | custom backgroundColor | false | [theme](https://github.com/jie1ong/react-native-basic-plus/src/style/theme.ts) background color

#### `Text`

Use [react-native-typography](https://github.com/hectahertz/react-native-typography) Human Text Style.

name | description | required | default
--- | --- | --- | ---
customColor | custom backgroundColor | false | [theme](https://github.com/jie1ong/react-native-basic-plus/src/style/theme.ts) text color

#### `View`

name | description | required | default
--- | --- | --- | ---
customColor | custom backgroundColor | false | [theme](https://github.com/jie1ong/react-native-basic-plus/src/style/theme.ts) color

## Hooks

#### `useTheme`

```tsx
import { useTheme } from 'react-native-basic-plus';

function Component() {
    const { isDarkMode, colors, theme } = useTheme();

    // do something theme style code

    return (
        <View />
    )
}
```

## To Do

- [x] basic use.
- [ ] add more props and components.

<h2 id="built-with">Built With ❤️</h2>

- [react-native-dark-mode](https://github.com/codemotionapps/react-native-dark-mode)
- [react-native-typography](https://github.com/hectahertz/react-native-typography)

## Author

- [jielong](https://jieling.ink/)

## License

MIT