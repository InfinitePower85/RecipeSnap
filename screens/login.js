import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Button } from 'react-native';
import baseStyle from '../styles/baseStyles';
import { Logo } from '../components/logo';

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
          <Logo></Logo>
          <Text>Welcome to RecipeSnap!</Text>          
          <Text>Sign Up or Log In Below</Text>
          <Button style={baseStyle.button}
          title="button"
          onPress={() =>
            navigation.navigate('Home')
          } 
          />
        </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default LoginScreen;