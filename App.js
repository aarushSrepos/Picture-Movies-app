import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './SRC/Home';
import SearchScreen from './SRC/Search';

const Main = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Main.Navigator>
        <Main.Screen 
        name="Home" 
        component={Home}
        options={{
          headerShown: false
        }} />
        <Main.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false
        }}/>
      </Main.Navigator>
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
