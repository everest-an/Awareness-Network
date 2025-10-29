/**
 * Home screen - Dashboard for the Awareness Network app
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
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import apiService from '../services/api';
import { encryptData } from '../utils/encryption';
import { addMemory } from '../store/slices/memoriesSlice';

const HomeScreen = () => {
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
        videos: 0, // Will be implemented later
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
      // Read the file as base64
      const base64 = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      // Encrypt the photo data
      const encryptedContent = encryptData(base64, publicKey);
      
      // Encrypt metadata
      const metadata = {
        filename: uri.split('/').pop(),
        mimeType: 'image/jpeg',
        size: base64.length,
      };
      const encryptedMetadata = encryptData(metadata, publicKey);

      // Upload to backend
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
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>{user?.email}</Text>
      </View>

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

      <View style={styles.actionsContainer}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        
        <TouchableOpacity style={styles.actionButton} onPress={handleCapturePhoto}>
          <Text style={styles.actionButtonText}>📷 Capture Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleSelectPhoto}>
          <Text style={styles.actionButtonText}>🖼️ Upload from Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>🎬 Create Video Memory</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>💼 Scan Business Card</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#007AFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  actionsContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  actionButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
});

export default HomeScreen;
