/**
 * Home screen - Luma-inspired minimalist dashboard
 */

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import apiService from '../services/api';
import { encryptData } from '../utils/encryption';
import { addMemory } from '../store/slices/memoriesSlice';
import { theme } from '../theme';
import { Card } from '../components/Card';

const HomeScreen = ({ navigation }: any) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const publicKey = user?.publicKey || '';
  const dispatch = useDispatch();
  const [stats, setStats] = useState({
    memories: 0,
    contacts: 0,
    videos: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const memories = await apiService.getMemories(1000, 0);
      const contacts = await apiService.getContacts();
      
      setStats({
        memories: memories.length,
        contacts: contacts.length,
        videos: 0,
      });
    } catch (error) {
      console.error('Failed to load stats:', error);
    }
  };

  const handleCapturePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Camera permission is required to take photos');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ['images'],
      quality: 0.8,
      allowsEditing: false,
    });

    if (!result.canceled && result.assets[0]) {
      await uploadPhoto(result.assets[0].uri);
    }
  };

  const handleSelectPhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Photo library permission is required');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 0.8,
      allowsMultipleSelection: false,
    });

    if (!result.canceled && result.assets[0]) {
      await uploadPhoto(result.assets[0].uri);
    }
  };

  const uploadPhoto = async (uri: string) => {
    try {
      const base64 = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const encryptedContent = encryptData(base64, publicKey);
      
      const metadata = {
        filename: uri.split('/').pop(),
        mimeType: 'image/jpeg',
        size: base64.length,
      };
      const encryptedMetadata = encryptData(metadata, publicKey);

      const memory = await apiService.uploadMemory({
        type: 'photo',
        encryptedContent,
        encryptedMetadata,
        sourceApp: 'com.awareness.network',
        capturedAt: new Date().toISOString(),
      });

      dispatch(addMemory(memory));
      Alert.alert('Success', 'Photo uploaded successfully!');
      loadStats();
    } catch (error: any) {
      Alert.alert('Upload Failed', error.message || 'An error occurred');
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back</Text>
            <Text style={styles.title}>Awareness</Text>
          </View>
          
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => navigation?.navigate('Profile')}
          >
            <View style={styles.profileIcon}>
              <Text style={styles.profileInitial}>
                {user?.email?.charAt(0).toUpperCase() || 'A'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{stats.memories}</Text>
            <Text style={styles.statLabel}>Memories</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{stats.contacts}</Text>
            <Text style={styles.statLabel}>Contacts</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{stats.videos}</Text>
            <Text style={styles.statLabel}>Videos</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          
          <View style={styles.actionsGrid}>
            <TouchableOpacity
              style={styles.actionCard}
              onPress={handleCapturePhoto}
            >
              <LinearGradient
                colors={['#6366f1', '#8b5cf6']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.actionGradient}
              >
                <Text style={styles.actionIcon}>📸</Text>
                <Text style={styles.actionText}>Capture</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionCard}
              onPress={handleSelectPhoto}
            >
              <LinearGradient
                colors={['#8b5cf6', '#ec4899']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.actionGradient}
              >
                <Text style={styles.actionIcon}>🖼️</Text>
                <Text style={styles.actionText}>Gallery</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.actionsGrid}>
            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation?.navigate('Contacts')}
            >
              <LinearGradient
                colors={['#ec4899', '#f43f5e']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.actionGradient}
              >
                <Text style={styles.actionIcon}>💼</Text>
                <Text style={styles.actionText}>Scan Card</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation?.navigate('Memories')}
            >
              <LinearGradient
                colors={['#f43f5e', '#fb923c']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.actionGradient}
              >
                <Text style={styles.actionIcon}>🎬</Text>
                <Text style={styles.actionText}>Video</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Memories */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Memories</Text>
            <TouchableOpacity onPress={() => navigation?.navigate('Memories')}>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.emptyText}>
            Your memories will appear here
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.xl,
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.base,
  },
  greeting: {
    fontSize: theme.typography.sizes.sm,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.xs,
  },
  title: {
    fontSize: theme.typography.sizes['4xl'],
    fontWeight: theme.typography.weights.bold as any,
    color: theme.colors.text.primary,
  },
  profileButton: {
    padding: theme.spacing.xs,
  },
  profileIcon: {
    width: 44,
    height: 44,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.background.elevated,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    fontSize: theme.typography.sizes.lg,
    fontWeight: theme.typography.weights.semibold as any,
    color: theme.colors.text.primary,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.base,
    gap: theme.spacing.base,
  },
  statCard: {
    flex: 1,
    backgroundColor: theme.colors.background.card,
    borderRadius: theme.borderRadius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border.subtle,
    padding: theme.spacing.base,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: theme.typography.sizes['3xl'],
    fontWeight: theme.typography.weights.bold as any,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  statLabel: {
    fontSize: theme.typography.sizes.xs,
    color: theme.colors.text.secondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  section: {
    marginTop: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.base,
  },
  sectionTitle: {
    fontSize: theme.typography.sizes.xl,
    fontWeight: theme.typography.weights.semibold as any,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.base,
  },
  seeAll: {
    fontSize: theme.typography.sizes.sm,
    color: theme.colors.accent.primary,
  },
  actionsGrid: {
    flexDirection: 'row',
    gap: theme.spacing.base,
    marginBottom: theme.spacing.base,
  },
  actionCard: {
    flex: 1,
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
  },
  actionGradient: {
    padding: theme.spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
  },
  actionIcon: {
    fontSize: 32,
    marginBottom: theme.spacing.sm,
  },
  actionText: {
    fontSize: theme.typography.sizes.sm,
    fontWeight: theme.typography.weights.semibold as any,
    color: theme.colors.text.primary,
  },
  emptyText: {
    fontSize: theme.typography.sizes.base,
    color: theme.colors.text.tertiary,
    textAlign: 'center',
    paddingVertical: theme.spacing['2xl'],
  },
});

export default HomeScreen;
