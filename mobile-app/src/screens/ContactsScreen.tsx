/**
 * Contacts screen - Display all contacts extracted from business cards and messages
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
import { setContacts, setLoading } from '../store/slices/contactsSlice';
import apiService from '../services/api';
import { decryptData } from '../utils/encryption';
import { DecryptedContact } from '../types';

const ContactsScreen = () => {
  const dispatch = useDispatch();
  const { items: contacts, loading } = useSelector((state: RootState) => state.contacts);
  const privateKey = useSelector((state: RootState) => state.auth.privateKey);
  const [refreshing, setRefreshing] = useState(false);
  const [decryptedContacts, setDecryptedContacts] = useState<
    Array<{ id: string; data: DecryptedContact }>
  >([]);

  useEffect(() => {
    loadContacts();
  }, []);

  useEffect(() => {
    if (contacts.length > 0 && privateKey) {
      decryptContactsData();
    }
  }, [contacts, privateKey]);

  const loadContacts = async () => {
    dispatch(setLoading(true));
    try {
      const data = await apiService.getContacts();
      dispatch(setContacts(data));
    } catch (error) {
      console.error('Failed to load contacts:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const decryptContactsData = () => {
    if (!privateKey) return;

    const decrypted = contacts.map((contact) => {
      try {
        const data = JSON.parse(decryptData(contact.encryptedData, privateKey));
        return { id: contact.contactId, data };
      } catch (error) {
        console.error('Failed to decrypt contact:', error);
        return null;
      }
    }).filter((c) => c !== null) as Array<{ id: string; data: DecryptedContact }>;

    setDecryptedContacts(decrypted);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadContacts();
    setRefreshing(false);
  };

  const renderContactItem = ({ item }: { item: { id: string; data: DecryptedContact } }) => {
    const { data } = item;

    return (
      <TouchableOpacity style={styles.contactCard}>
        <View style={styles.contactAvatar}>
          <Text style={styles.contactAvatarText}>
            {data.name ? data.name.charAt(0).toUpperCase() : '?'}
          </Text>
        </View>
        <View style={styles.contactContent}>
          <Text style={styles.contactName}>{data.name || 'Unknown'}</Text>
          {data.title && <Text style={styles.contactTitle}>{data.title}</Text>}
          {data.company && <Text style={styles.contactCompany}>{data.company}</Text>}
          {data.email && <Text style={styles.contactInfo}>📧 {data.email}</Text>}
          {data.phone && <Text style={styles.contactInfo}>📱 {data.phone}</Text>}
        </View>
      </TouchableOpacity>
    );
  };

  if (loading && decryptedContacts.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Contacts</Text>
        <Text style={styles.subtitle}>{decryptedContacts.length} contacts</Text>
      </View>

      {decryptedContacts.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No contacts yet</Text>
          <Text style={styles.emptySubtext}>
            Scan business cards to build your network!
          </Text>
        </View>
      ) : (
        <FlatList
          data={decryptedContacts}
          renderItem={renderContactItem}
          keyExtractor={(item) => item.id}
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
  contactCard: {
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
  contactAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  contactAvatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  contactContent: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  contactTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  contactCompany: {
    fontSize: 14,
    fontWeight: '500',
    color: '#007AFF',
    marginBottom: 8,
  },
  contactInfo: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
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

export default ContactsScreen;
