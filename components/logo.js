import React from "react";
import { Image } from 'react-native'

// Separate component for Logo
const Logo = () => {
    return (
      <Image
        source={require('../assets/RecipeSnapFavico.png')}
        style={{ justifyContent: 'center', alignItems: 'center', width: 176, height: 220, marginTop: 5, zIndex:1 }}
      />
    );
  };

export default Logo;