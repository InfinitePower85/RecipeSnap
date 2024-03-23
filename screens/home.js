import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Button } from 'react-native';
import Logo from '../components/logo';

const HomeScreen = ({route}) => {
    return (
        <View style={styles.container}>
            <Logo></Logo>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
        title="Go to Jane's profile"
        onPress={() =>
          route.navigate('Profile', {name: 'Jane'})
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
  
export default HomeScreen;