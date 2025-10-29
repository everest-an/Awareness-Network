-- Awareness Network Database Schema
-- Memory organization with knowledge graph structure

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  public_key TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Memory nodes - core unit of information
CREATE TABLE memories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  -- Content (encrypted)
  encrypted_content TEXT NOT NULL,
  content_type VARCHAR(50) NOT NULL, -- 'photo', 'text', 'business_card', 'chat', 'video'
  
  -- Metadata
  title VARCHAR(500),
  description TEXT,
  thumbnail_url TEXT,
  
  -- Temporal information
  memory_date TIMESTAMP, -- When the memory actually occurred
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  -- Spatial information
  location_lat DECIMAL(10, 8),
  location_lng DECIMAL(11, 8),
  location_name VARCHAR(255),
  
  -- Categorization
  category VARCHAR(100), -- 'people', 'places', 'events', 'knowledge', 'work', 'personal'
  tags TEXT[], -- Array of tags
  
  -- AI analysis
  ai_summary TEXT,
  ai_keywords TEXT[],
  sentiment VARCHAR(20), -- 'positive', 'neutral', 'negative'
  importance_score INTEGER DEFAULT 0, -- 0-100
  
  -- Search
  search_vector tsvector,
  
  CONSTRAINT valid_importance CHECK (importance_score BETWEEN 0 AND 100)
);

-- Entities extracted from memories (people, companies, places, concepts)
CREATE TABLE entities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  -- Entity information
  entity_type VARCHAR(50) NOT NULL, -- 'person', 'company', 'place', 'concept', 'event'
  name VARCHAR(255) NOT NULL,
  description TEXT,
  
  -- Metadata
  metadata JSONB, -- Flexible storage for entity-specific data
  avatar_url TEXT,
  
  -- Statistics
  mention_count INTEGER DEFAULT 0,
  first_seen TIMESTAMP,
  last_seen TIMESTAMP,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  UNIQUE(user_id, entity_type, name)
);

-- Relationships between memories (knowledge graph edges)
CREATE TABLE memory_relationships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  -- Source and target memories
  source_memory_id UUID NOT NULL REFERENCES memories(id) ON DELETE CASCADE,
  target_memory_id UUID NOT NULL REFERENCES memories(id) ON DELETE CASCADE,
  
  -- Relationship type
  relationship_type VARCHAR(100) NOT NULL, -- 'related_to', 'follows', 'references', 'same_person', 'same_place', 'same_event'
  
  -- Strength of relationship (0-1)
  strength DECIMAL(3, 2) DEFAULT 0.5,
  
  -- Metadata
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  CONSTRAINT valid_strength CHECK (strength BETWEEN 0 AND 1),
  CONSTRAINT no_self_reference CHECK (source_memory_id != target_memory_id),
  UNIQUE(source_memory_id, target_memory_id, relationship_type)
);

-- Entity mentions in memories (links memories to entities)
CREATE TABLE entity_mentions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  memory_id UUID NOT NULL REFERENCES memories(id) ON DELETE CASCADE,
  entity_id UUID NOT NULL REFERENCES entities(id) ON DELETE CASCADE,
  
  -- Context of mention
  context TEXT,
  confidence DECIMAL(3, 2) DEFAULT 1.0, -- AI confidence in entity extraction
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  CONSTRAINT valid_confidence CHECK (confidence BETWEEN 0 AND 1),
  UNIQUE(memory_id, entity_id)
);

-- Contacts (people from business cards, QR codes, etc.)
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  entity_id UUID REFERENCES entities(id), -- Link to entity if applicable
  
  -- Personal information (encrypted)
  encrypted_data TEXT NOT NULL,
  
  -- Basic info (searchable)
  name VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  title VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(50),
  
  -- Source
  source VARCHAR(50), -- 'business_card', 'qr_code', 'manual', 'chat'
  source_memory_id UUID REFERENCES memories(id),
  
  -- Metadata
  avatar_url TEXT,
  notes TEXT,
  tags TEXT[],
  
  -- Interaction tracking
  first_met TIMESTAMP,
  last_contact TIMESTAMP,
  interaction_count INTEGER DEFAULT 0,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Memory collections (user-created groups)
CREATE TABLE collections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  name VARCHAR(255) NOT NULL,
  description TEXT,
  color VARCHAR(7), -- Hex color code
  icon VARCHAR(50),
  
  -- Visibility
  is_private BOOLEAN DEFAULT true,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  UNIQUE(user_id, name)
);

-- Memory-Collection mapping
CREATE TABLE memory_collections (
  memory_id UUID NOT NULL REFERENCES memories(id) ON DELETE CASCADE,
  collection_id UUID NOT NULL REFERENCES collections(id) ON DELETE CASCADE,
  added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  PRIMARY KEY (memory_id, collection_id)
);

-- AI processing jobs
CREATE TABLE ai_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  job_type VARCHAR(100) NOT NULL, -- 'ocr', 'video_generation', 'entity_extraction', 'relationship_discovery'
  status VARCHAR(50) NOT NULL DEFAULT 'pending', -- 'pending', 'processing', 'completed', 'failed'
  
  -- Input/Output
  input_data JSONB,
  output_data JSONB,
  error_message TEXT,
  
  -- Related entities
  memory_id UUID REFERENCES memories(id) ON DELETE SET NULL,
  
  -- Timing
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  
  -- Progress
  progress INTEGER DEFAULT 0, -- 0-100
  
  CONSTRAINT valid_progress CHECK (progress BETWEEN 0 AND 100)
);

-- Video memories (generated compilations)
CREATE TABLE videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  title VARCHAR(255) NOT NULL,
  description TEXT,
  
  -- Video file
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  duration INTEGER, -- seconds
  
  -- Metadata
  style VARCHAR(100), -- 'landscape', 'entertainment', 'art', 'travel', 'people'
  music_track VARCHAR(255),
  
  -- Source memories
  source_memory_ids UUID[],
  
  -- Status
  status VARCHAR(50) DEFAULT 'processing', -- 'processing', 'ready', 'failed'
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_memories_user_id ON memories(user_id);
CREATE INDEX idx_memories_memory_date ON memories(memory_date DESC);
CREATE INDEX idx_memories_category ON memories(category);
CREATE INDEX idx_memories_created_at ON memories(created_at DESC);
CREATE INDEX idx_memories_search_vector ON memories USING GIN(search_vector);
CREATE INDEX idx_memories_tags ON memories USING GIN(tags);

CREATE INDEX idx_entities_user_id ON entities(user_id);
CREATE INDEX idx_entities_type ON entities(entity_type);
CREATE INDEX idx_entities_name ON entities(name);

CREATE INDEX idx_memory_relationships_source ON memory_relationships(source_memory_id);
CREATE INDEX idx_memory_relationships_target ON memory_relationships(target_memory_id);
CREATE INDEX idx_memory_relationships_type ON memory_relationships(relationship_type);

CREATE INDEX idx_entity_mentions_memory ON entity_mentions(memory_id);
CREATE INDEX idx_entity_mentions_entity ON entity_mentions(entity_id);

CREATE INDEX idx_contacts_user_id ON contacts(user_id);
CREATE INDEX idx_contacts_name ON contacts(name);
CREATE INDEX idx_contacts_company ON contacts(company);

CREATE INDEX idx_collections_user_id ON collections(user_id);

CREATE INDEX idx_ai_jobs_user_id ON ai_jobs(user_id);
CREATE INDEX idx_ai_jobs_status ON ai_jobs(status);
CREATE INDEX idx_ai_jobs_created_at ON ai_jobs(created_at DESC);

-- Full-text search function
CREATE OR REPLACE FUNCTION update_memory_search_vector()
RETURNS TRIGGER AS $$
BEGIN
  NEW.search_vector := 
    setweight(to_tsvector('english', COALESCE(NEW.title, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(NEW.description, '')), 'B') ||
    setweight(to_tsvector('english', COALESCE(NEW.ai_summary, '')), 'C') ||
    setweight(to_tsvector('english', COALESCE(array_to_string(NEW.tags, ' '), '')), 'D');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER memory_search_vector_update
BEFORE INSERT OR UPDATE ON memories
FOR EACH ROW
EXECUTE FUNCTION update_memory_search_vector();

-- Update timestamps trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER users_updated_at BEFORE UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER memories_updated_at BEFORE UPDATE ON memories
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER entities_updated_at BEFORE UPDATE ON entities
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER contacts_updated_at BEFORE UPDATE ON contacts
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER collections_updated_at BEFORE UPDATE ON collections
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER videos_updated_at BEFORE UPDATE ON videos
FOR EACH ROW EXECUTE FUNCTION update_updated_at();
