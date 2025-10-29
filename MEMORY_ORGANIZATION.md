# Memory Organization & Knowledge Graph

Awareness Network is built around a powerful **knowledge graph** that connects your memories, creating an intelligent network of your life experiences.

## Core Concept

Unlike traditional photo or note apps that store memories in isolated silos, Awareness Network treats each memory as a **node in a knowledge graph**, connected to other memories through relationships, shared entities (people, places, companies), and contextual similarities.

This creates a living, breathing network of your experiences that becomes more valuable over time as connections are discovered and strengthened.

## Database Architecture

### Memory Nodes

Each memory is a node in the graph containing:

**Content**:
- Encrypted data (photos, text, business cards, chat messages)
- AI-generated summary and keywords
- Sentiment analysis (positive, neutral, negative)
- Importance score (0-100)

**Temporal Information**:
- When the memory occurred (memory_date)
- When it was created (created_at)

**Spatial Information**:
- GPS coordinates (lat/lng)
- Location name (e.g., "Salesforce Tower, San Francisco")

**Categorization**:
- Category: people, places, events, knowledge, work, personal
- User-defined tags
- Auto-generated AI keywords

**Entities**:
- People mentioned
- Companies involved
- Places visited
- Concepts discussed

### Entity System

Entities are the **connective tissue** of the knowledge graph. They represent:

**People**: Friends, family, colleagues, contacts from business cards
- Name, photo, contact information
- First met date, last contact date
- Interaction count across all memories

**Companies**: Organizations, businesses, employers
- Company name, industry type
- Business analysis (from business cards)
- Related contacts and events

**Places**: Locations, venues, cities, countries
- Geographic coordinates
- Visit frequency and dates
- Associated memories

**Concepts**: Ideas, topics, projects, interests
- Keywords and descriptions
- Related memories and discussions

**Events**: Meetings, conferences, celebrations
- Date and location
- Participants
- Related memories

### Relationships

Memories are connected through various relationship types:

**Direct Relationships**:
- `related_to`: General semantic similarity
- `follows`: Chronological sequence
- `references`: One memory mentions another

**Entity-Based Relationships**:
- `same_person`: Memories featuring the same person
- `same_place`: Memories from the same location
- `same_event`: Memories from the same event
- `same_company`: Memories related to the same organization

**Strength**: Each relationship has a strength score (0-1) indicating how closely connected the memories are.

### Collections

User-created groups of memories:
- Named collections (e.g., "Europe Trip 2024", "Work Projects", "Family")
- Color-coded and icon-tagged
- Can be private or shared

## UI Design: Three Views

### 1. Timeline View

**Purpose**: Chronological browsing of memories

**Design**:
- Clean white background with elegant typography
- Vertical timeline with dates on the left
- Memory cards on the right showing:
  - Large thumbnail image
  - Title and date
  - Location tag (with icon)
  - People tags (colored pills)
- Smooth scrolling with infinite loading
- Month/year separators

**Interaction**:
- Tap card to view details
- Swipe left for quick actions (share, delete, add to collection)
- Pull down to refresh
- Search bar at top

**Use Case**: "Show me what happened in March" or "Browse my recent memories"

### 2. Knowledge Graph View

**Purpose**: Visual exploration of memory connections

**Design**:
- Dark theme (black background)
- Interactive network graph with:
  - Circular nodes containing memory thumbnails
  - Connecting lines showing relationships
  - Color-coded by category:
    - Blue: People
    - Green: Places
    - Purple: Events
    - Orange: Work/Business
    - Pink: Personal
- Node size reflects importance
- Line thickness reflects relationship strength

**Interaction**:
- Pinch to zoom in/out
- Drag to pan around graph
- Tap node to highlight connections
- Double-tap to view memory details
- Filter by category, date range, or entity
- Search to find specific memories

**Use Case**: "Show me all memories connected to Sarah" or "How are my work and personal memories related?"

### 3. Memory Detail View

**Purpose**: Deep dive into a single memory

**Design**:
- Clean white background
- Hero image at top (full width)
- Content sections:
  1. **Header**: Title, date/time
  2. **Location**: Map preview with pin
  3. **Entities**: Colored tags for people, companies, places
  4. **AI Summary**: Natural language description
  5. **Original Content**: Photos, text, or extracted data
  6. **Related Memories**: Grid of connected memories
  7. **Actions**: Share, edit, add to collection, delete

**Interaction**:
- Tap entity tags to see all related memories
- Tap related memories to navigate
- Swipe through photos
- Edit title, description, tags
- Add manual connections

**Use Case**: "Tell me everything about this business meeting" or "Who was at this event?"

## Key Features

### 1. Smart Entity Extraction

When you add a memory, AI automatically extracts:

**From Photos**:
- Faces → People entities
- Text (OCR) → Companies, places, concepts
- Scene recognition → Event types

**From Business Cards**:
- Name → Person entity
- Company → Company entity + industry analysis
- Contact info → Stored in contacts
- Meeting context → "Met at [event] on [date]"

**From Chat Messages**:
- Participants → People entities
- Mentioned places → Place entities
- Discussed topics → Concept entities

### 2. Automatic Relationship Discovery

The system continuously analyzes memories to find connections:

**Temporal Clustering**: Memories from the same day/event are linked

**Entity Matching**: Memories mentioning the same person/place/company are connected

**Semantic Similarity**: AI compares content to find related memories

**Location Proximity**: Memories from nearby locations are linked

**Visual Similarity**: Photos with similar content are connected

### 3. Intelligent Search

Search across all dimensions:

**Text Search**: Titles, descriptions, AI summaries, OCR text

**Entity Search**: "Show me all memories with Sarah"

**Date Search**: "March 2024" or "Last summer"

**Location Search**: "San Francisco" or "Near home"

**Category Search**: "Work events" or "Family photos"

**Combined Filters**: "Photos with Sarah in San Francisco from 2024"

### 4. Memory Insights

AI-powered insights about your memories:

**People Insights**:
- "You've met with John 12 times this year"
- "Your most frequent contact is Sarah"
- "You haven't seen Alex since March"

**Place Insights**:
- "You've visited 15 cities this year"
- "Your favorite place is the beach"
- "You spend most time at the office"

**Time Insights**:
- "You create most memories on weekends"
- "Your busiest month was April"
- "You have 5 years of memories"

**Relationship Insights**:
- "This memory connects to 8 other memories"
- "Your work and personal networks rarely overlap"
- "Sarah appears in 50% of your social memories"

### 5. Collections & Organization

**Smart Collections** (auto-generated):
- "This Week"
- "This Month"
- "People" (grouped by person)
- "Places" (grouped by location)
- "Work" (business-related memories)

**Custom Collections** (user-created):
- Name, description, color, icon
- Manually add/remove memories
- Share with others (future feature)

### 6. Video Memory Compilation

Generate video compilations from related memories:

**By Category**:
- "Landscape" memories → Nature video with calm music
- "Entertainment" memories → Party video with upbeat music
- "Art" memories → Gallery-style video with classical music

**By Entity**:
- "Memories with Sarah" → Friendship video
- "Memories from Paris" → Travel video

**By Time**:
- "2024 Year in Review"
- "Summer Highlights"

**Customization**:
- Choose style (cinematic, fast-paced, nostalgic)
- Select music track
- Add text overlays
- Adjust duration

## Data Flow

### Adding a Memory

1. **User uploads** photo/text/business card
2. **Client encrypts** content before upload
3. **Server stores** encrypted data
4. **AI processes** content:
   - OCR for text extraction
   - Face detection for people
   - Scene recognition for context
   - Entity extraction (people, places, companies)
   - Sentiment analysis
   - Keyword generation
5. **Graph updates**:
   - Create memory node
   - Create/link entity nodes
   - Discover relationships with existing memories
   - Calculate importance score
6. **User sees** memory in timeline with extracted entities

### Browsing Memories

**Timeline View**:
1. User scrolls through chronological list
2. Lazy loading fetches memories in batches
3. Tap to view details

**Graph View**:
1. Load initial graph (recent memories + high importance)
2. User explores by zooming/panning
3. Tap node to load connected memories
4. Filter/search to focus on specific entities

**Search**:
1. User types query
2. Full-text search across all fields
3. Results ranked by relevance
4. Filter by category, date, entity

## Privacy & Security

**End-to-End Encryption**:
- All memory content encrypted on client
- Server only stores encrypted data
- Only user has decryption key

**Zero-Knowledge Architecture**:
- Server cannot read memory content
- AI processing on encrypted data (homomorphic encryption)
- Entity extraction preserves privacy

**Local-First**:
- Memories cached locally
- Offline browsing and search
- Sync when online

## Future Enhancements

**AI Conversations**:
- Chat with your memories
- "When did I last see Sarah?"
- "What did I do in Paris?"

**Collaborative Memories**:
- Share memories with friends/family
- Merge memory graphs
- Collaborative collections

**Advanced Analytics**:
- Life patterns and trends
- Relationship dynamics
- Time allocation analysis

**AR Integration**:
- View memories in physical locations
- Overlay past photos on current view

**Voice Memories**:
- Record audio notes
- Transcribe and extract entities
- Link to related memories

---

**The goal**: Transform scattered memories into an intelligent, interconnected knowledge graph that helps you remember, understand, and cherish your life experiences.
