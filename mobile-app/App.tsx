/**
 * Main application entry point
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { ThemeProvider } from './src/contexts/ThemeContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppNavigator />
        <StatusBar style="auto" />
      </ThemeProvider>
    </Provider>
  );
}
