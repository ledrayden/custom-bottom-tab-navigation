import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AnimatedScrollView from './AnimatedScrollView';



const Home = () => {
    return (
        <AnimatedScrollView style={styles.container}>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in libero est. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
                turpis egestas. Phasellus nec tortor in metus viverra fringilla. Integer facilisis 
                aliquet mattis. Quisque interdum dolor ac est placerat, non congue dolor feugiat. 
                Duis a erat vel sapien molestie efficitur. Aenean bibendum molestie cursus.

                Proin vel nulla euismod, tincidunt purus vitae, aliquet metus. Suspendisse 
                viverra velit dui. Pellentesque feugiat leo vel vulputate accumsan. Sed porta 
                tempor sem. Vestibulum auctor est et erat viverra vulputate. Curabitur ac quam 
                elementum, lobortis velit placerat, vehicula orci. Suspendisse pretium elit non
                dignissim efficitur. Class aptent taciti sociosqu ad litora torquent per conubia 
                nostra, per inceptos himenaeos. Aenean sagittis gravida tincidunt. Curabitur consequat 
                lorem eget massa tempor, in suscipit velit blandit. Ut a est augue. Ut tincidunt dictum 
                turpis quis faucibus.
            </Text>
        </AnimatedScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#76a6ef'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default Home;