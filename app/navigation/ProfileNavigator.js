import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../components/Profile';
import Test from '../components/Test';

const Stack = createNativeStackNavigator();



const ProfileNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerTransparent: true, title: '' }}>
            <Stack.Screen name='Profile1' component={Profile} />
            <Stack.Screen name='Test' component={Test} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    
})

export default ProfileNavigator;