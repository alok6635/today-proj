import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import IconHome from 'react-native-vector-icons/FontAwesome';
import IconReorder from 'react-native-vector-icons/FontAwesome';
import IconCart from 'react-native-vector-icons/FontAwesome';
import IconAccount from 'react-native-vector-icons/MaterialCommunityIcons';
import CartScreen from './src/screens/CartScreen';
import { CartContext, CartProvider } from './src/context/CartContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

const MyHomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='HOME'
    >
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

const CartTabIcon = ({ size, color }) => {
  const { carts } = useContext(CartContext);
  return (
    <View style={{ position: 'relative' }}>
      <IconCart name="shopping-cart" size={size} color={color} />
      <View style={styles.iconCart}>
        <Text style={styles.iconText}>{carts.length}</Text>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'red'
          }}
          initialRouteName='HOME_STACK'
        >
          <Tab.Screen
            name="HOME_STACK"
            component={MyHomeStack}
            options={{
              tabBarIcon: ({ size, color }) => (
                <IconHome name="home" size={size} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="REORDER"
            component={Home}
            options={{
              tabBarIcon: ({ size, color }) => (
                <IconReorder name="reorder" size={size} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="CART"
            component={CartScreen}
            options={{
              tabBarIcon: CartTabIcon,
            }}
          />

          <Tab.Screen
            name="ACCOUNT"
            component={Home}
            options={{
              tabBarIcon: ({ size, color }) => (
                <IconAccount name="account" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  iconCart: {
    height: 17,
    width: 17,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: -5,
    backgroundColor: 'red',
  },
  iconText: {
    fontSize: 12,
    color: "white",
    fontWeight: '500',
  }
});
