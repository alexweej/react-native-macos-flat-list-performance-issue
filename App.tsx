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

function App() {
  const renderItem = ({item}: {item: (typeof data)[0]}) => {
    console.info('rendering FlatList item', item.id, new Date());
    return <MyComponent text={item.text} id={item.id} />;
  };

  return <FlatList data={data} renderItem={renderItem} />;
}

const MyComponent = React.memo(function MyComponent(props: {
  text: string;
  id: number;
}) {
  console.info('rendering MyComponent', props.id, new Date());
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
});

export default App;
