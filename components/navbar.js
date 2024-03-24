import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';
import { TouchableHighlight } from "react-native";
import { useNavigation } from '@react-navigation/core'; 

/**
 * state = {
    login: 'block',
    home: 'none',
    cam: 'none',
    profile: 'none',
  }
  
  homePress = () => this.setState(state => ({
    login: 'none',
    home: 'block',
    cam: 'none',
    profile: 'none',
  }));
  
  cameraPress = () => this.setState(state => ({
    login: 'none',
    home: 'none',
    cam: 'block',
    profile: 'none',
  }));
  
  profilePress = () => this.setState(state => ({
    login: 'none',
    home: 'none',
    cam: 'none',
    profile: 'block',
  }));
 */

//Seperate component for Navbar
const Navbar = () => {
    const navigation = useNavigation(); 

    return (
        <View style={navbarStyles.navbarContainer}>
            <TouchableHighlight style={navbarStyles.navbarButton2}
                onPress={ () => { navigation.navigate('Home'); }}
                >
                <Image
                    source={require('../assets/home.png')}
                    style={navbarStyles.image}
                    resizeMode = 'contain'
                />
            </TouchableHighlight>

            <TouchableHighlight style={navbarStyles.navbarButton}
                onPress={() => { navigation.navigate('Camera'); }}
                >
                <Image
                    source={require('../assets/camera.png')}
                    style={navbarStyles.image}
                    resizeMode = 'contain'
                />
            </TouchableHighlight>

            <TouchableHighlight style={navbarStyles.navbarButton2} 
                onPress={() => { navigation.navigate('Login'); }}
                >
                <Image
                    source={require('../assets/user.png')}
                    style={navbarStyles.image}
                    resizeMode = 'contain'

                />
            </TouchableHighlight>
        </View>
    );
  };

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const navbarStyles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#f2fbe5',
    },

    navbarContainer: {
        height: deviceHeight/9,
        width: deviceWidth,
        backgroundColor: '#04AC7E',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 4,
        borderLeftWidth: 4,
        borderRightWidth: 4
    },

    navbarButton: {
        height: '100%',
        width: '33%',
        borderRightWidth: 4,
        borderLeftWidth: 4,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

    navbarButton2: {
        height: '100%',
        width: '33%',
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image : { 
        width: '45%', 
        height: undefined, 
        aspectRatio: 1,
    }
});
export {Navbar, navbarStyles};