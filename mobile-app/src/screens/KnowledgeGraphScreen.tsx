/**
 * Knowledge Graph Screen
 * Displays knowledge fragments with relationship strength visualization and natural language search
 */

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import apiService from '../services/api';

interface KnowledgeNode {
  id: string;
  type: 'person' | 'place' | 'event' | 'memory' | 'document';
  title: string;
  description: string;
  timestamp: string;
  connections: {
    nodeId: string;
    strength: number; // 0-1
    type: string;
  }[];
  metadata: {
    location?: string;
    tags?: string[];
    source?: string;
  };
}

const KnowledgeGraphScreen = () => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [nodes, setNodes] = useState<KnowledgeNode[]>([]);
  const [filteredNodes, setFilteredNodes] = useState<KnowledgeNode[]>([]);
  const [selectedNode, setSelectedNode] = useState<KnowledgeNode | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadKnowledgeGraph();
  }, []);

  useEffect(() => {
    handleNaturalLanguageSearch(searchQuery);
  }, [searchQuery, nodes]);

  const loadKnowledgeGraph = async () => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      const mockNodes: KnowledgeNode[] = [
        {
          id: '1',
          type: 'person',
          title: 'John Smith',
          description: 'Met at tech conference',
          timestamp: '2023-06-15',
          connections: [
            { nodeId: '2', strength: 0.8, type: 'met_at' },
            { nodeId: '3', strength: 0.6, type: 'works_with' },
          ],
          metadata: {
            location: 'San Francisco',
            tags: ['tech', 'networking'],
            source: 'business_card',
          },
        },
        {
          id: '2',
          type: 'event',
          title: 'Tech Conference 2023',
          description: 'Annual technology summit',
          timestamp: '2023-06-15',
          connections: [
            { nodeId: '1', strength: 0.8, type: 'attended_by' },
            { nodeId: '4', strength: 0.9, type: 'location' },
          ],
          metadata: {
            location: 'San Francisco',
            tags: ['conference', 'tech'],
            source: 'calendar',
          },
        },
        {
          id: '3',
          type: 'person',
          title: 'Sarah Johnson',
          description: 'Product manager at TechCorp',
          timestamp: '2023-07-20',
          connections: [
            { nodeId: '1', strength: 0.6, type: 'colleague' },
          ],
          metadata: {
            location: 'New York',
            tags: ['tech', 'product'],
            source: 'linkedin',
          },
        },
        {
          id: '4',
          type: 'place',
          title: 'Moscone Center',
          description: 'Convention center in San Francisco',
          timestamp: '2023-06-15',
          connections: [
            { nodeId: '2', strength: 0.9, type: 'venue_for' },
          ],
          metadata: {
            location: 'San Francisco, CA',
            tags: ['venue', 'conference'],
          },
        },
        {
          id: '5',
          type: 'memory',
          title: 'Paris Trip 2023',
          description: 'Summer vacation photos',
          timestamp: '2023-08-10',
          connections: [
            { nodeId: '6', strength: 0.95, type: 'location' },
          ],
          metadata: {
            location: 'Paris, France',
            tags: ['travel', 'vacation', 'photos'],
            source: 'photo_album',
          },
        },
        {
          id: '6',
          type: 'place',
          title: 'Eiffel Tower',
          description: 'Iconic Paris landmark',
          timestamp: '2023-08-10',
          connections: [
            { nodeId: '5', strength: 0.95, type: 'featured_in' },
          ],
          metadata: {
            location: 'Paris, France',
            tags: ['landmark', 'tourism'],
          },
        },
      ];
      setNodes(mockNodes);
      setFilteredNodes(mockNodes);
    } catch (error) {
      console.error('Failed to load knowledge graph:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNaturalLanguageSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredNodes(nodes);
      return;
    }

    const lowerQuery = query.toLowerCase();
    
    // Natural language patterns
    const patterns = {
      location: /in\s+([a-z\s,]+)|at\s+([a-z\s,]+)/i,
      time: /(\d{4})|in\s+(\d{4})|during\s+([a-z]+)/i,
      person: /with\s+([a-z\s]+)|about\s+([a-z\s]+)/i,
      type: /photos?|memories|people|events?|places?/i,
    };

    let filtered = nodes;

    // Extract location from query
    const locationMatch = query.match(patterns.location);
    if (locationMatch) {
      const location = (locationMatch[1] || locationMatch[2]).trim();
      filtered = filtered.filter(node => 
        node.metadata.location?.toLowerCase().includes(location.toLowerCase()) ||
        node.title.toLowerCase().includes(location.toLowerCase()) ||
        node.description.toLowerCase().includes(location.toLowerCase())
      );
    }

    // Extract time from query
    const timeMatch = query.match(patterns.time);
    if (timeMatch) {
      const year = timeMatch[1] || timeMatch[2];
      if (year) {
        filtered = filtered.filter(node => node.timestamp.includes(year));
      }
    }

    // Extract person from query
    const personMatch = query.match(patterns.person);
    if (personMatch) {
      const person = (personMatch[1] || personMatch[2]).trim();
      filtered = filtered.filter(node =>
        node.title.toLowerCase().includes(person.toLowerCase()) ||
        node.description.toLowerCase().includes(person.toLowerCase())
      );
    }

    // Filter by type
    const typeMatch = query.match(patterns.type);
    if (typeMatch) {
      const typeKeyword = typeMatch[0].toLowerCase();
      if (typeKeyword.includes('photo') || typeKeyword.includes('memor')) {
        filtered = filtered.filter(node => node.type === 'memory');
      } else if (typeKeyword.includes('people') || typeKeyword.includes('person')) {
        filtered = filtered.filter(node => node.type === 'person');
      } else if (typeKeyword.includes('event')) {
        filtered = filtered.filter(node => node.type === 'event');
      } else if (typeKeyword.includes('place')) {
        filtered = filtered.filter(node => node.type === 'place');
      }
    }

    // Fallback: general text search
    if (filtered.length === nodes.length && query.trim()) {
      filtered = nodes.filter(node =>
        node.title.toLowerCase().includes(lowerQuery) ||
        node.description.toLowerCase().includes(lowerQuery) ||
        node.metadata.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    }

    setFilteredNodes(filtered);
  };

  const getNodeColor = (type: string) => {
    switch (type) {
      case 'person': return theme.colors.accent.primary;
      case 'place': return theme.colors.success;
      case 'event': return theme.colors.warning;
      case 'memory': return theme.colors.accent.secondary;
      case 'document': return theme.colors.info;
      default: return theme.colors.text.secondary;
    }
  };

  const getConnectionStrengthWidth = (strength: number) => {
    return 2 + (strength * 6); // 2-8px based on strength
  };

  const renderNode = (node: KnowledgeNode) => {
    const isSelected = selectedNode?.id === node.id;
    const nodeColor = getNodeColor(node.type);

    return (
      <TouchableOpacity
        key={node.id}
        style={[
          styles.nodeCard,
          {
            backgroundColor: theme.colors.background.card,
            borderColor: isSelected ? nodeColor : theme.colors.border.default,
            borderWidth: isSelected ? 2 : 1,
          },
        ]}
        onPress={() => setSelectedNode(isSelected ? null : node)}
      >
        <View style={styles.nodeHeader}>
          <View style={[styles.nodeTypeIndicator, { backgroundColor: nodeColor }]} />
          <View style={styles.nodeHeaderText}>
            <Text style={[styles.nodeTitle, { color: theme.colors.text.primary }]}>
              {node.title}
            </Text>
            <Text style={[styles.nodeType, { color: theme.colors.text.tertiary }]}>
              {node.type.toUpperCase()}
            </Text>
          </View>
        </View>

        <Text style={[styles.nodeDescription, { color: theme.colors.text.secondary }]}>
          {node.description}
        </Text>

        <View style={styles.nodeMetadata}>
          {node.metadata.location && (
            <Text style={[styles.metadataText, { color: theme.colors.text.tertiary }]}>
              📍 {node.metadata.location}
            </Text>
          )}
          <Text style={[styles.metadataText, { color: theme.colors.text.tertiary }]}>
            🕐 {new Date(node.timestamp).toLocaleDateString()}
          </Text>
        </View>

        {node.metadata.tags && node.metadata.tags.length > 0 && (
          <View style={styles.tagsContainer}>
            {node.metadata.tags.map((tag, index) => (
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

        {isSelected && node.connections.length > 0 && (
          <View style={styles.connectionsContainer}>
            <Text style={[styles.connectionsTitle, { color: theme.colors.text.primary }]}>
              Connections:
            </Text>
            {node.connections.map((conn, index) => {
              const connectedNode = nodes.find(n => n.id === conn.nodeId);
              if (!connectedNode) return null;

              return (
                <View key={index} style={styles.connectionItem}>
                  <View
                    style={[
                      styles.connectionStrength,
                      {
                        width: getConnectionStrengthWidth(conn.strength),
                        backgroundColor: nodeColor,
                        opacity: conn.strength,
                      },
                    ]}
                  />
                  <Text style={[styles.connectionText, { color: theme.colors.text.secondary }]}>
                    {conn.type.replace(/_/g, ' ')} → {connectedNode.title}
                  </Text>
                  <Text style={[styles.strengthText, { color: theme.colors.text.tertiary }]}>
                    {Math.round(conn.strength * 100)}%
                  </Text>
                </View>
              );
            })}
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background.primary }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text.primary }]}>
          Knowledge Graph
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.text.secondary }]}>
          Explore your connected memories and knowledge
        </Text>
      </View>

      <View style={[styles.searchContainer, { backgroundColor: theme.colors.background.card }]}>
        <Text style={[styles.searchIcon, { color: theme.colors.text.tertiary }]}>🔍</Text>
        <TextInput
          style={[styles.searchInput, { color: theme.colors.text.primary }]}
          placeholder="Try: 'Show me photos from Paris in 2023'"
          placeholderTextColor={theme.colors.text.tertiary}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Text style={[styles.clearButton, { color: theme.colors.text.tertiary }]}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.statsContainer}>
        <Text style={[styles.statsText, { color: theme.colors.text.secondary }]}>
          Showing {filteredNodes.length} of {nodes.length} nodes
        </Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {filteredNodes.map(renderNode)}
        <View style={styles.bottomPadding} />
      </ScrollView>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  clearButton: {
    fontSize: 20,
    paddingHorizontal: 8,
  },
  statsContainer: {
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  statsText: {
    fontSize: 12,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  nodeCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  nodeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  nodeTypeIndicator: {
    width: 4,
    height: 40,
    borderRadius: 2,
    marginRight: 12,
  },
  nodeHeaderText: {
    flex: 1,
  },
  nodeTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 2,
  },
  nodeType: {
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  nodeDescription: {
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 20,
  },
  nodeMetadata: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 8,
  },
  metadataText: {
    fontSize: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
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
  connectionsContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(128, 128, 128, 0.2)',
  },
  connectionsTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  connectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  connectionStrength: {
    height: 20,
    borderRadius: 10,
    marginRight: 12,
  },
  connectionText: {
    flex: 1,
    fontSize: 13,
  },
  strengthText: {
    fontSize: 11,
    fontWeight: '600',
  },
  bottomPadding: {
    height: 40,
  },
});

export default KnowledgeGraphScreen;
