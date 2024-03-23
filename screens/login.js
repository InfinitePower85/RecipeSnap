import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Button } from 'react-native';

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text>Open up App.js to start working on your sadfdsfdsafdsafa!</Text>
        <Button
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