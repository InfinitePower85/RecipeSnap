import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Button } from 'react-native';
import {Logo, logoStyles} from '../components/logo';
import { Image } from 'react-native';
import baseStyle from '../styles/baseStyles';
import { TouchableOpacity } from 'react-native';
import { navbarStyles, Navbar } from '../components/navbar';

const HomeScreen = ({route}) => {
    return (
        <SafeAreaView style={[baseStyle.safeArea, {backgroundColor: '#f5fbe2'}]}>
            <ScrollView contentContainerStyle={[baseStyle.container, {flexGrow: 1}]}>

                <Logo />
                <Text>Welcome to RecipeSnap 📸, your ultimate culinary companion! Turn your meal inspirations into reality with just a snap of your camera. 🛒</Text>
                
            </ScrollView>
            <Navbar></Navbar>
        </SafeAreaView>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5fbe2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {

    }
  });
  
export default HomeScreen;