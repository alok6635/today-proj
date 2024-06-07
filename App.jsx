import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import IconHome from 'react-native-vector-icons/FontAwesome';
import IconReorder from 'react-native-vector-icons/FontAwesome';
import IconCart from 'react-native-vector-icons/FontAwesome';
import IconAccount from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createBottomTabNavigator();
function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}
const App = () => {
  return (
    <NavigationContainer>

      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'red'
      }}>

        <Tab.Screen name="HOME" component={HomeScreen} options={{
          tabBarIcon: ({ size, color }) => {
            return <IconHome name="home" size={size} color={color} />
          }
        }} />

        <Tab.Screen name="REORDER" component={Home} options={{
          tabBarIcon: ({ size, color }) => (
            <IconReorder name="reorder" size={size} color={color} />)
        }} />

        <Tab.Screen name="shopping-cart" component={Home} options={{
          tabBarIcon: ({ size, color }) => (
            <IconCart name="shopping-cart" size={size} color={color} />)
        }} />

        <Tab.Screen name="account" component={Home} options={{
          tabBarIcon: ({ size, color }) => (
            <IconAccount name="account" size={size} color={color} />)
        }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;


