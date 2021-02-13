import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';

const imageItems = [
  {req : require('./assets/images/image000.jpg'), id : '000'},
  {req : require('./assets/images/image001.jpg'), id : '001'},
  {req : require('./assets/images/image002.jpg'), id : '002'},
  {req : require('./assets/images/image003.jpg'), id : '003'},
  {req : require('./assets/images/image004.jpg'), id : '004'},
  {req : require('./assets/images/image005.jpg'), id : '005'},
];

const Item = ({ item }) => (
  <Image source={item.req} style={[styles.image]} />
);

export default function App() {
  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={imageItems}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 3,
    marginVertical: 3,
    marginHorizontal: 3,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 10,
  },
});