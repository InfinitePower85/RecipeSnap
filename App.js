import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExampleComponent from './screens/colorButton';
import PokemonInfo from './screens/pokemonAPI';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/> 
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="eee" component={ExampleComponent} options={{headerShown: false}} />
        <Stack.Screen name="pokem" component={PokemonInfo} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
