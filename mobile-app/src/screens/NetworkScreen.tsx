/**
 * Network Screen (Social Graph)
 * Displays contacts with interaction frequency, context cards, and company analysis
 */

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import apiService from '../services/api';

interface Contact {
  id: string;
  name: string;
  title?: string;
  company?: string;
  email?: string;
  phone?: string;
  photo?: string;
  firstMet: {
    date: string;
    location: string;
    context: string;
  };
  interactions: {
    total: number;
    lastContact: string;
    frequency: 'high' | 'medium' | 'low';
    channels: {
      email: number;
      phone: number;
      meeting: number;
      message: number;
    };
  };
  companyInfo?: {
    name: string;
    industry: string;
    size: string;
    description: string;
    businessType: string;
  };
  tags: string[];
  notes: string[];
}

const NetworkScreen = () => {
  const { theme } = useTheme();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [filterBy, setFilterBy] = useState<'all' | 'high' | 'medium' | 'low'>('all');
  const [sortBy, setSortBy] = useState<'frequency' | 'recent' | 'name'>('frequency');

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      // TODO: Replace with actual API call
      const mockContacts: Contact[] = [
        {
          id: '1',
          name: 'John Smith',
          title: 'CTO',
          company: 'TechCorp Inc.',
          email: 'john@techcorp.com',
          phone: '+1 (555) 123-4567',
          firstMet: {
            date: '2023-06-15',
            location: 'Tech Conference, San Francisco',
            context: 'Met during keynote speech, discussed AI trends',
          },
          interactions: {
            total: 45,
            lastContact: '2024-10-25',
            frequency: 'high',
            channels: {
              email: 25,
              phone: 8,
              meeting: 10,
              message: 2,
            },
          },
          companyInfo: {
            name: 'TechCorp Inc.',
            industry: 'Software & Technology',
            size: '500-1000 employees',
            description: 'Leading AI and cloud computing solutions provider',
            businessType: 'B2B SaaS',
          },
          tags: ['tech', 'ai', 'potential_partner'],
          notes: [
            'Interested in AI collaboration',
            'Follow up on Q4 partnership proposal',
          ],
        },
        {
          id: '2',
          name: 'Sarah Johnson',
          title: 'Product Manager',
          company: 'InnovateCo',
          email: 'sarah.j@innovateco.com',
          phone: '+1 (555) 234-5678',
          firstMet: {
            date: '2023-09-20',
            location: 'LinkedIn Connection',
            context: 'Connected through mutual friend, discussed product strategy',
          },
          interactions: {
            total: 28,
            lastContact: '2024-10-20',
            frequency: 'medium',
            channels: {
              email: 18,
              phone: 3,
              meeting: 5,
              message: 2,
            },
          },
          companyInfo: {
            name: 'InnovateCo',
            industry: 'Consumer Electronics',
            size: '100-500 employees',
            description: 'Innovative consumer tech products',
            businessType: 'B2C Hardware',
          },
          tags: ['product', 'innovation', 'networking'],
          notes: [
            'Shared insights on product-market fit',
          ],
        },
        {
          id: '3',
          name: 'Michael Chen',
          title: 'Founder & CEO',
          company: 'StartupX',
          email: 'michael@startupx.io',
          phone: '+1 (555) 345-6789',
          firstMet: {
            date: '2024-01-10',
            location: 'Startup Pitch Event, New York',
            context: 'Pitched at same event, discussed fundraising strategies',
          },
          interactions: {
            total: 12,
            lastContact: '2024-09-15',
            frequency: 'low',
            channels: {
              email: 8,
              phone: 2,
              meeting: 2,
              message: 0,
            },
          },
          companyInfo: {
            name: 'StartupX',
            industry: 'FinTech',
            size: '10-50 employees',
            description: 'Next-generation payment solutions for SMBs',
            businessType: 'B2B SaaS',
          },
          tags: ['startup', 'fintech', 'founder'],
          notes: [
            'Recently raised Series A',
            'Looking for strategic advisors',
          ],
        },
        {
          id: '4',
          name: 'Emily Rodriguez',
          title: 'VP of Marketing',
          company: 'GlobalBrand Co.',
          email: 'emily.r@globalbrand.com',
          firstMet: {
            date: '2023-11-05',
            location: 'Marketing Summit, Chicago',
            context: 'Panel discussion on digital marketing trends',
          },
          interactions: {
            total: 35,
            lastContact: '2024-10-28',
            frequency: 'high',
            channels: {
              email: 20,
              phone: 5,
              meeting: 8,
              message: 2,
            },
          },
          companyInfo: {
            name: 'GlobalBrand Co.',
            industry: 'Consumer Goods',
            size: '1000+ employees',
            description: 'International consumer brands portfolio',
            businessType: 'B2C Retail',
          },
          tags: ['marketing', 'branding', 'enterprise'],
          notes: [
            'Exploring co-marketing opportunities',
            'Strong network in retail sector',
          ],
        },
      ];
      setContacts(mockContacts);
    } catch (error) {
      console.error('Failed to load contacts:', error);
    }
  };

  const getFilteredAndSortedContacts = () => {
    let filtered = contacts;

    // Filter by frequency
    if (filterBy !== 'all') {
      filtered = filtered.filter(c => c.interactions.frequency === filterBy);
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'frequency':
          return b.interactions.total - a.interactions.total;
        case 'recent':
          return new Date(b.interactions.lastContact).getTime() - 
                 new Date(a.interactions.lastContact).getTime();
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  };

  const getFrequencyColor = (frequency: string) => {
    switch (frequency) {
      case 'high': return theme.colors.success;
      case 'medium': return theme.colors.warning;
      case 'low': return theme.colors.text.tertiary;
      default: return theme.colors.text.secondary;
    }
  };

  const getFrequencyLabel = (frequency: string) => {
    switch (frequency) {
      case 'high': return 'Frequent';
      case 'medium': return 'Regular';
      case 'low': return 'Occasional';
      default: return 'Unknown';
    }
  };

  const renderContactCard = (contact: Contact) => {
    const frequencyColor = getFrequencyColor(contact.interactions.frequency);

    return (
      <TouchableOpacity
        key={contact.id}
        style={[styles.contactCard, { backgroundColor: theme.colors.background.card }]}
        onPress={() => setSelectedContact(contact)}
      >
        <View style={styles.contactHeader}>
          <View style={[styles.avatar, { backgroundColor: theme.colors.accent.primary }]}>
            <Text style={styles.avatarText}>
              {contact.name.split(' ').map(n => n[0]).join('')}
            </Text>
          </View>
          <View style={styles.contactInfo}>
            <Text style={[styles.contactName, { color: theme.colors.text.primary }]}>
              {contact.name}
            </Text>
            {contact.title && (
              <Text style={[styles.contactTitle, { color: theme.colors.text.secondary }]}>
                {contact.title}
              </Text>
            )}
            {contact.company && (
              <Text style={[styles.contactCompany, { color: theme.colors.text.tertiary }]}>
                {contact.company}
              </Text>
            )}
          </View>
        </View>

        <View style={styles.interactionStats}>
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: theme.colors.text.primary }]}>
              {contact.interactions.total}
            </Text>
            <Text style={[styles.statLabel, { color: theme.colors.text.tertiary }]}>
              Interactions
            </Text>
          </View>
          <View style={styles.statItem}>
            <View style={[styles.frequencyBadge, { backgroundColor: frequencyColor + '20' }]}>
              <Text style={[styles.frequencyText, { color: frequencyColor }]}>
                {getFrequencyLabel(contact.interactions.frequency)}
              </Text>
            </View>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: theme.colors.text.primary }]}>
              {Math.floor((Date.now() - new Date(contact.interactions.lastContact).getTime()) / (1000 * 60 * 60 * 24))}d
            </Text>
            <Text style={[styles.statLabel, { color: theme.colors.text.tertiary }]}>
              Last contact
            </Text>
          </View>
        </View>

        {contact.tags.length > 0 && (
          <View style={styles.tagsContainer}>
            {contact.tags.slice(0, 3).map((tag, index) => (
              <View
                key={index}
                style={[styles.tag, { backgroundColor: theme.colors.background.tertiary }]}
              >
                <Text style={[styles.tagText, { color: theme.colors.text.secondary }]}>
                  {tag}
                </Text>
              </View>
            ))}
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const renderContextModal = () => {
    if (!selectedContact) return null;

    return (
      <Modal
        visible={!!selectedContact}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setSelectedContact(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: theme.colors.background.primary }]}>
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: theme.colors.text.primary }]}>
                {selectedContact.name}
              </Text>
              <TouchableOpacity onPress={() => setSelectedContact(null)}>
                <Text style={[styles.closeButton, { color: theme.colors.text.secondary }]}>✕</Text>
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Context Card */}
              <View style={[styles.section, { backgroundColor: theme.colors.background.card }]}>
                <Text style={[styles.sectionTitle, { color: theme.colors.accent.primary }]}>
                  📍 First Met
                </Text>
                <Text style={[styles.contextDate, { color: theme.colors.text.primary }]}>
                  {new Date(selectedContact.firstMet.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </Text>
                <Text style={[styles.contextLocation, { color: theme.colors.text.secondary }]}>
                  {selectedContact.firstMet.location}
                </Text>
                <Text style={[styles.contextDescription, { color: theme.colors.text.secondary }]}>
                  {selectedContact.firstMet.context}
                </Text>
              </View>

              {/* Interaction Breakdown */}
              <View style={[styles.section, { backgroundColor: theme.colors.background.card }]}>
                <Text style={[styles.sectionTitle, { color: theme.colors.accent.primary }]}>
                  📊 Interaction Channels
                </Text>
                {Object.entries(selectedContact.interactions.channels).map(([channel, count]) => (
                  <View key={channel} style={styles.channelRow}>
                    <Text style={[styles.channelName, { color: theme.colors.text.primary }]}>
                      {channel.charAt(0).toUpperCase() + channel.slice(1)}
                    </Text>
                    <View style={styles.channelBar}>
                      <View
                        style={[
                          styles.channelBarFill,
                          {
                            width: `${(count / selectedContact.interactions.total) * 100}%`,
                            backgroundColor: theme.colors.accent.primary,
                          },
                        ]}
                      />
                    </View>
                    <Text style={[styles.channelCount, { color: theme.colors.text.tertiary }]}>
                      {count}
                    </Text>
                  </View>
                ))}
              </View>

              {/* Company Analysis */}
              {selectedContact.companyInfo && (
                <View style={[styles.section, { backgroundColor: theme.colors.background.card }]}>
                  <Text style={[styles.sectionTitle, { color: theme.colors.accent.primary }]}>
                    🏢 Company Analysis
                  </Text>
                  <Text style={[styles.companyName, { color: theme.colors.text.primary }]}>
                    {selectedContact.companyInfo.name}
                  </Text>
                  <View style={styles.companyDetails}>
                    <View style={styles.companyDetailRow}>
                      <Text style={[styles.companyDetailLabel, { color: theme.colors.text.tertiary }]}>
                        Industry:
                      </Text>
                      <Text style={[styles.companyDetailValue, { color: theme.colors.text.secondary }]}>
                        {selectedContact.companyInfo.industry}
                      </Text>
                    </View>
                    <View style={styles.companyDetailRow}>
                      <Text style={[styles.companyDetailLabel, { color: theme.colors.text.tertiary }]}>
                        Size:
                      </Text>
                      <Text style={[styles.companyDetailValue, { color: theme.colors.text.secondary }]}>
                        {selectedContact.companyInfo.size}
                      </Text>
                    </View>
                    <View style={styles.companyDetailRow}>
                      <Text style={[styles.companyDetailLabel, { color: theme.colors.text.tertiary }]}>
                        Type:
                      </Text>
                      <Text style={[styles.companyDetailValue, { color: theme.colors.text.secondary }]}>
                        {selectedContact.companyInfo.businessType}
                      </Text>
                    </View>
                  </View>
                  <Text style={[styles.companyDescription, { color: theme.colors.text.secondary }]}>
                    {selectedContact.companyInfo.description}
                  </Text>
                </View>
              )}

              {/* Notes */}
              {selectedContact.notes.length > 0 && (
                <View style={[styles.section, { backgroundColor: theme.colors.background.card }]}>
                  <Text style={[styles.sectionTitle, { color: theme.colors.accent.primary }]}>
                    📝 Notes
                  </Text>
                  {selectedContact.notes.map((note, index) => (
                    <Text key={index} style={[styles.note, { color: theme.colors.text.secondary }]}>
                      • {note}
                    </Text>
                  ))}
                </View>
              )}

              {/* Contact Info */}
              <View style={[styles.section, { backgroundColor: theme.colors.background.card }]}>
                <Text style={[styles.sectionTitle, { color: theme.colors.accent.primary }]}>
                  📞 Contact Information
                </Text>
                {selectedContact.email && (
                  <Text style={[styles.contactDetail, { color: theme.colors.text.secondary }]}>
                    ✉️ {selectedContact.email}
                  </Text>
                )}
                {selectedContact.phone && (
                  <Text style={[styles.contactDetail, { color: theme.colors.text.secondary }]}>
                    📱 {selectedContact.phone}
                  </Text>
                )}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  };

  const filteredContacts = getFilteredAndSortedContacts();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background.primary }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text.primary }]}>
          Network
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.text.secondary }]}>
          Your professional connections
        </Text>
      </View>

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              filterBy === 'all' && { backgroundColor: theme.colors.accent.primary },
              { borderColor: theme.colors.border.default },
            ]}
            onPress={() => setFilterBy('all')}
          >
            <Text
              style={[
                styles.filterButtonText,
                { color: filterBy === 'all' ? '#fff' : theme.colors.text.secondary },
              ]}
            >
              All ({contacts.length})
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              filterBy === 'high' && { backgroundColor: theme.colors.success },
              { borderColor: theme.colors.border.default },
            ]}
            onPress={() => setFilterBy('high')}
          >
            <Text
              style={[
                styles.filterButtonText,
                { color: filterBy === 'high' ? '#fff' : theme.colors.text.secondary },
              ]}
            >
              Frequent
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              filterBy === 'medium' && { backgroundColor: theme.colors.warning },
              { borderColor: theme.colors.border.default },
            ]}
            onPress={() => setFilterBy('medium')}
          >
            <Text
              style={[
                styles.filterButtonText,
                { color: filterBy === 'medium' ? '#fff' : theme.colors.text.secondary },
              ]}
            >
              Regular
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              filterBy === 'low' && { backgroundColor: theme.colors.text.tertiary },
              { borderColor: theme.colors.border.default },
            ]}
            onPress={() => setFilterBy('low')}
          >
            <Text
              style={[
                styles.filterButtonText,
                { color: filterBy === 'low' ? '#fff' : theme.colors.text.secondary },
              ]}
            >
              Occasional
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Sort Options */}
      <View style={styles.sortContainer}>
        <Text style={[styles.sortLabel, { color: theme.colors.text.tertiary }]}>Sort by:</Text>
        <TouchableOpacity onPress={() => setSortBy('frequency')}>
          <Text
            style={[
              styles.sortOption,
              { color: sortBy === 'frequency' ? theme.colors.accent.primary : theme.colors.text.secondary },
            ]}
          >
            Frequency
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSortBy('recent')}>
          <Text
            style={[
              styles.sortOption,
              { color: sortBy === 'recent' ? theme.colors.accent.primary : theme.colors.text.secondary },
            ]}
          >
            Recent
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSortBy('name')}>
          <Text
            style={[
              styles.sortOption,
              { color: sortBy === 'name' ? theme.colors.accent.primary : theme.colors.text.secondary },
            ]}
          >
            Name
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {filteredContacts.map(renderContactCard)}
        <View style={styles.bottomPadding} />
      </ScrollView>

      {renderContextModal()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
  },
  filtersContainer: {
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 8,
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
    gap: 12,
  },
  sortLabel: {
    fontSize: 12,
  },
  sortOption: {
    fontSize: 14,
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  contactCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  contactHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  contactInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  contactName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 2,
  },
  contactTitle: {
    fontSize: 14,
    marginBottom: 2,
  },
  contactCompany: {
    fontSize: 12,
  },
  interactionStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 11,
  },
  frequencyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  frequencyText: {
    fontSize: 12,
    fontWeight: '600',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '500',
  },
  bottomPadding: {
    height: 40,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 20,
    paddingHorizontal: 20,
    maxHeight: Dimensions.get('window').height * 0.9,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 28,
    padding: 8,
  },
  section: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  contextDate: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  contextLocation: {
    fontSize: 14,
    marginBottom: 8,
  },
  contextDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  channelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  channelName: {
    width: 80,
    fontSize: 14,
  },
  channelBar: {
    flex: 1,
    height: 8,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    borderRadius: 4,
    marginHorizontal: 12,
  },
  channelBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  channelCount: {
    width: 30,
    fontSize: 12,
    textAlign: 'right',
  },
  companyName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  companyDetails: {
    marginBottom: 12,
  },
  companyDetailRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  companyDetailLabel: {
    width: 80,
    fontSize: 13,
  },
  companyDetailValue: {
    flex: 1,
    fontSize: 13,
  },
  companyDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  note: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  contactDetail: {
    fontSize: 14,
    marginBottom: 8,
  },
});

export default NetworkScreen;
