import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Button } from 'react-native';
import {Logo, logoStyles} from '../components/logo';

import baseStyle from '../styles/baseStyles';
import { TouchableOpacity } from 'react-native';
import { navbarStyles, Navbar } from '../components/navbar';


import CameraInput from '../components/CameraInput';
import ImageInput from '../components/ImageInput';

const HomeScreen = ({route}) => {
    return (
        <SafeAreaView style={[baseStyle.safeArea, {backgroundColor: '#f5fbe2'}]}>
            <ScrollView contentContainerStyle={[baseStyle.container, {flexGrow: 1}]}>

                <Logo />

                <CameraInput />
                <ImageInput />
                
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
  });
  
export default HomeScreen;