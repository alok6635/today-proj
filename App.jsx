import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import IconHome from 'react-native-vector-icons/FontAwesome';
import IconReorder from 'react-native-vector-icons/FontAwesome';
import IconCart from 'react-native-vector-icons/FontAwesome';
import IconAccount from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

const MyHomeStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}
        initialRouteName=''
      >
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
      </Stack.Navigator>
    </>
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

        <Tab.Screen name="HOME_STACK" component={MyHomeStack} options={{
          tabBarIcon: ({ size, color }) => (
            <IconHome name="home" size={size} color={color} />
          ),
        }}
        />

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


