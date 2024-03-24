import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import {Logo, logoStyles} from '../components/logo';

import baseStyle from '../styles/baseStyles';
import { navbarStyles, Navbar } from '../components/navbar';


import CameraInput from '../components/CameraInput';
import ImageInput from '../components/ImageInput';

const CameraScreen = ({route}) => {
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
  
export default CameraScreen;