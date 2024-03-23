import React from "react";
import { Image } from 'react-native'

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
});

export {Logo, logoStyles};