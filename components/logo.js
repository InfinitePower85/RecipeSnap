import React from "react";
import { Image, View } from 'react-native'
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
// Separate component for Logo
const Logo = () => {
    return (
        <View style={logoStyles.logoBar}>
          <Image
            source={require('../assets/RecipeSnapFavico.png')}
            style={logoStyles.image}
            resizeMode = 'contain'
          />
        </View>
    );
  };

const logoStyles = StyleSheet.create({
  logoBar: {
    height: deviceHeight/5,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { 
    width: '50%', 
    height: undefined, 
    aspectRatio: 1,
    }
});

export {Logo, logoStyles};