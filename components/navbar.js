import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
//Seperate component for Navbar
import {Dimensions} from 'react-native';


const Navbar = () => {
    return (
        <View style={styles.container}>
            <Text> Navbar </Text>
        </View>
    );
  };

const deviceHeight = Dimensions.get('window').width;
const deviceWidth = Dimensions.get('window').height;
const navbarStyles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#f2fbe5',
    },

    navbarContainer: {
        height: deviceHeight/12,
        width: deviceWidth,
        backgroundColor: '#04AC7E',
        alignItems: 'center',
        justifyContent: 'center',
    },

    navbarButton: {
        marginTop: deviceHeight/25,
        height: deviceHeight/10,
        width: deviceWidth/5,
        borderColor: '#7A0BC0',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export {Navbar, navbarStyles};