import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const TabBar = ({ state, navigation }) => {
  // console.log(props)
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}></View>
    </View>

  )


};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 20,
    width,
    backgroundColor: 'red',
  },
  container: {

  },

})

export default TabBar;