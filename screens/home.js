import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

const HomeScreen = ({route}) => {
    return (
        <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Button
        title="Go to Jane's profile"
        onPress={() =>
          route.navigate('Profile', {name: 'Jane'})
        }
        />
        </View>
    );
  };

export default HomeScreen;