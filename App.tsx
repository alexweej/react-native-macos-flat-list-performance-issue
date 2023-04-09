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
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={{height: 2}}></View>}
      data={data}
      renderItem={({item}) => <Text>{item.text}</Text>}
    />
  );
}

export default App;
