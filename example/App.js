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
