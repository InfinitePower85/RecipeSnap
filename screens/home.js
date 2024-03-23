import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Button } from 'react-native';
import {Logo, logoStyles} from '../components/logo';
import baseStyle from '../styles/baseStyles';
import { TouchableOpacity } from 'react-native';
import { navbarStyles, Navbar } from '../components/navbar';
import ImageInput from '../components/ImageInput';
import Camera from '../components/CameraInput';

const HomeScreen = ({route}) => {
    return (
        <SafeAreaView style={[baseStyle.safeArea]}>

            <ScrollView contentContainerStyle={[baseStyle.container, {backgroundColor: '#f5fbe2', flexGrow: 1}]}>
                <Logo></Logo>
                <Text>This is the home screen!!!!</Text>

                <TouchableOpacity 
                    onPress={() => route.navigate('Profile', {name: 'Jane'})}
                    style={baseStyle.button}
                > 
                
                <Text> Do something </Text> 
                </TouchableOpacity>
                
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