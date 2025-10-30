/**
 * Main navigation configuration
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useTheme } from '../contexts/ThemeContext';

// Import screens
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import MemoriesScreen from '../screens/MemoriesScreen';
import ContactsScreen from '../screens/ContactsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import KnowledgeGraphScreen from '../screens/KnowledgeGraphScreen';
import NetworkScreen from '../screens/NetworkScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/**
 * Main tab navigator for authenticated users
 */
const MainTabs = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.accent.primary,
        tabBarInactiveTintColor: theme.colors.text.tertiary,
        tabBarStyle: {
          backgroundColor: theme.colors.background.secondary,
          borderTopColor: theme.colors.border.subtle,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ 
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>🏠</Text>,
        }}
      />
      <Tab.Screen
        name="KnowledgeGraph"
        component={KnowledgeGraphScreen}
        options={{ 
          tabBarLabel: 'Knowledge',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>🧠</Text>,
        }}
      />
      <Tab.Screen
        name="Network"
        component={NetworkScreen}
        options={{ 
          tabBarLabel: 'Network',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>👥</Text>,
        }}
      />
      <Tab.Screen
        name="Memories"
        component={MemoriesScreen}
        options={{ 
          tabBarLabel: 'Memories',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>📸</Text>,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ 
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>⚙️</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

/**
 * Root navigator that switches between auth and main app
 */
const AppNavigator = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : (
          <Stack.Screen name="Main" component={MainTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
