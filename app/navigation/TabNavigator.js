import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Create from '../components/Create';
import Profile from '../components/Profile';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator 
            tabBar={(props) => <TabBar {...props} />}            
        >
        <Tab.Screen 
            name='Home' 
            component={Home}            
        />
        <Tab.Screen 
            name='Create' 
            component={Create}            
        />
        <Tab.Screen 
            name='Profile' 
            component={Profile}            
        />
        </Tab.Navigator>
    )
}


export default TabNavigator;