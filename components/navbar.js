import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
//Seperate component for Navbar
import {Dimensions} from 'react-native';
import { TouchableHighlight } from "react-native";



const Navbar = () => {
    return (
        <View style={navbarStyles.navbarContainer}>
            <TouchableHighlight style={navbarStyles.navbarButton}
                onPress={this.respondPress}
                >
                <Image
                    source={require('../assets/home.png')}
                    style={navbarStyles.image}
                    resizeMode = 'contain'
                />
            </TouchableHighlight>

            <TouchableHighlight style={navbarStyles.navbarButton}
                onPress={this.respondPress}
                >
                <Image
                    source={require('../assets/camera.png')}
                    style={navbarStyles.image}
                    resizeMode = 'contain'

                />
            </TouchableHighlight>

            <TouchableHighlight style={navbarStyles.navbarButton}
                onPress={this.respondPress}
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
        borderWidth: 2,

    },

    navbarButton: {
        height: '100%',
        width: '33%',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image : { 
        width: '50%', 
        height: undefined, 
        aspectRatio: 1,
    }
});
export {Navbar, navbarStyles};