/**
 * Memories screen - Display all user memories
 */

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setMemories, setLoading } from '../store/slices/memoriesSlice';
import apiService from '../services/api';

const MemoriesScreen = () => {
  const dispatch = useDispatch();
  const { items: memories, loading } = useSelector((state: RootState) => state.memories);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadMemories();
  }, []);

  const loadMemories = async () => {
    dispatch(setLoading(true));
    try {
      const data = await apiService.getMemories();
      dispatch(setMemories(data));
    } catch (error) {
      console.error('Failed to load memories:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadMemories();
    setRefreshing(false);
  };

  const renderMemoryItem = ({ item }: { item: any }) => {
    const date = new Date(item.capturedAt).toLocaleDateString();
    const time = new Date(item.capturedAt).toLocaleTimeString();

    return (
      <TouchableOpacity style={styles.memoryCard}>
        <View style={styles.memoryIcon}>
          <Text style={styles.memoryIconText}>
            {item.type === 'photo' ? '📷' : item.type === 'message' ? '💬' : '📄'}
          </Text>
        </View>
        <View style={styles.memoryContent}>
          <Text style={styles.memoryType}>{item.type.toUpperCase()}</Text>
          <Text style={styles.memoryDate}>
            {date} at {time}
          </Text>
          {item.sourceApp && (
            <Text style={styles.memorySource}>Source: {item.sourceApp}</Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  if (loading && memories.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Memories</Text>
        <Text style={styles.subtitle}>{memories.length} total memories</Text>
      </View>

      {memories.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No memories yet</Text>
          <Text style={styles.emptySubtext}>
            Start capturing your precious moments!
          </Text>
        </View>
      ) : (
        <FlatList
          data={memories}
          renderItem={renderMemoryItem}
          keyExtractor={(item) => item.memoryId}
          contentContainerStyle={styles.listContainer}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  listContainer: {
    padding: 16,
  },
  memoryCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  memoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  memoryIconText: {
    fontSize: 24,
  },
  memoryContent: {
    flex: 1,
  },
  memoryType: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
    marginBottom: 4,
  },
  memoryDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  memorySource: {
    fontSize: 12,
    color: '#999',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});

export default MemoriesScreen;
