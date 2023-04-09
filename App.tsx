/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const data = Array.from({length: 500}, (_, i) => ({
  id: i,
  text: `This is another item with index ${i}`,
}));

type Item = (typeof data)[0];

const ITEM_HEIGHT = 20;

function App() {
  const renderItem = ({item}: {item: Item}) => {
    console.info('rendering FlatList item', item.id, new Date());
    return <MyComponent text={item.text} id={item.id} />;
  };

  const getItemLayout = (data: Item[] | null | undefined, index: number) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => `${item.id}`}
      getItemLayout={getItemLayout}
    />
  );
}

const MyComponent = React.memo(function MyComponent(props: {
  text: string;
  id: number;
}) {
  console.info('rendering MyComponent', props.id, new Date());
  return (
    <View style={{height: ITEM_HEIGHT}}>
      <Text>{props.text}</Text>
    </View>
  );
});

export default App;
