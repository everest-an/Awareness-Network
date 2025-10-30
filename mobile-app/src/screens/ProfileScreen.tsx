/**
 * Profile screen - User settings and account management
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Switch,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { clearAuth } from '../store/slices/authSlice';
import { useTheme } from '../contexts/ThemeContext';
import apiService from '../services/api';

const ProfileScreen = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const { theme, themeMode, toggleTheme } = useTheme();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            apiService.clearAuthToken();
            dispatch(clearAuth());
          },
        },
      ]
    );
  };

  const isDarkMode = themeMode === 'dark';

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background.primary }]}>
      <View style={[styles.header, { backgroundColor: theme.colors.accent.primary }]}>
        <View style={[styles.avatar, { backgroundColor: theme.colors.background.primary }]}>
          <Text style={[styles.avatarText, { color: theme.colors.accent.primary }]}>
            {user?.email ? user.email.charAt(0).toUpperCase() : 'U'}
          </Text>
        </View>
        <Text style={styles.email}>{user?.email}</Text>
        <Text style={styles.userId}>User ID: {user?.userId.slice(0, 8)}...</Text>
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.background.card }]}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text.secondary }]}>Appearance</Text>
        
        <View style={styles.menuItem}>
          <Text style={[styles.menuItemText, { color: theme.colors.text.primary }]}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{ false: theme.colors.border.default, true: theme.colors.accent.primary }}
            thumbColor={isDarkMode ? theme.colors.accent.secondary : theme.colors.background.primary}
          />
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.background.card }]}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text.secondary }]}>Account</Text>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuItemText, { color: theme.colors.text.primary }]}>Edit Profile</Text>
          <Text style={[styles.menuItemArrow, { color: theme.colors.text.tertiary }]}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuItemText, { color: theme.colors.text.primary }]}>Privacy Settings</Text>
          <Text style={[styles.menuItemArrow, { color: theme.colors.text.tertiary }]}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuItemText, { color: theme.colors.text.primary }]}>Storage Management</Text>
          <Text style={[styles.menuItemArrow, { color: theme.colors.text.tertiary }]}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.background.card }]}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text.secondary }]}>Security</Text>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuItemText, { color: theme.colors.text.primary }]}>Encryption Keys</Text>
          <Text style={[styles.menuItemArrow, { color: theme.colors.text.tertiary }]}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuItemText, { color: theme.colors.text.primary }]}>Change Password</Text>
          <Text style={[styles.menuItemArrow, { color: theme.colors.text.tertiary }]}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuItemText, { color: theme.colors.text.primary }]}>Two-Factor Authentication</Text>
          <Text style={[styles.menuItemArrow, { color: theme.colors.text.tertiary }]}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.background.card }]}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text.secondary }]}>Support</Text>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuItemText, { color: theme.colors.text.primary }]}>Help Center</Text>
          <Text style={[styles.menuItemArrow, { color: theme.colors.text.tertiary }]}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuItemText, { color: theme.colors.text.primary }]}>Privacy Policy</Text>
          <Text style={[styles.menuItemArrow, { color: theme.colors.text.tertiary }]}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuItemText, { color: theme.colors.text.primary }]}>Terms of Service</Text>
          <Text style={[styles.menuItemArrow, { color: theme.colors.text.tertiary }]}>›</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.logoutButton, { backgroundColor: theme.colors.error }]} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      <Text style={[styles.version, { color: theme.colors.text.tertiary }]}>Version 1.0.0</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 24,
    paddingTop: 60,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  userId: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.8,
  },
  section: {
    marginTop: 24,
    borderRadius: 12,
    marginHorizontal: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(128, 128, 128, 0.1)',
  },
  menuItemText: {
    fontSize: 16,
  },
  menuItemArrow: {
    fontSize: 24,
  },
  logoutButton: {
    margin: 16,
    marginTop: 24,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  version: {
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 24,
  },
});

export default ProfileScreen;
