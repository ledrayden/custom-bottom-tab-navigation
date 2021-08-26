import React, {useState, useRef, useEffect} from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import { startDetecting } from 'react-native/Libraries/Utilities/PixelRatio';
import Tab from './Tab';

const { width } = Dimensions.get('screen');

const TabBar = ({ state, navigation }) => {
  // console.log(state.routes)
  const [selected, setSelected] = useState('Home');
  const { routes } = state;
  const renderColor = (currentTab) => (currentTab === selected ? 'red' : 'black');

  const animation = useRef(new Animated.Value(0)).current;

  const handlePress = (activeTab, index) => {
    // console.log(activeTab);
    if(state.index !== index){
      setSelected(activeTab);
      navigation.navigate(activeTab);
    // console.log(state.index);
    }
  };

  // const showTabBar = () => {
  //   Animated.timing(animation, {
  //     toValue: 1,
  //     duration: 2000,
  //     useNativeDriver: true,
  //   }).start();
  // }

  // useEffect(() => {
  //   showTabBar();
  // },[]);
  

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.container, {transform: [{ translateY: animation }]}]}>
        {
          routes.map((route, index) => (
            <Tab 
              tab={route}
              icon={route.params.icon}
              onPress={ () => handlePress(route.name, index)}
              color={renderColor(route.name)}
              key={route.key}
            />
          ))
        }
      </Animated.View>
    </View>

  )


};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 20,
    width,    
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: 250,
    borderRadius: 100,
    elevation: 2,
  },

})

export default TabBar;