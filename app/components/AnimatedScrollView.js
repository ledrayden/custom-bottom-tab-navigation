import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';


let offsetY = 0;
const AnimatedScrollView = ({ children, ...restProps }) => {
  return (
    <ScrollView {...restProps} onScroll={({nativeEvent}) => {
      const newOffSet = nativeEvent.contentOffset.y;
      const distance = offsetY < newOffSet ? 'down' : 'up';
      offsetY = newOffSet;
      console.log(distance);
      // console.log(nativeEvent.contentOffset)
    }}>
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#76a6ef'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
})

export default AnimatedScrollView;