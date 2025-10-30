# Awareness Network - Project Overview

## Introduction

Awareness Network is an AI-powered knowledge graph and social network management platform that helps users organize, visualize, and analyze their personal and professional relationships, memories, and knowledge.

## Project Structure

```
Awareness-Network/
├── mobile-app/          # React Native mobile application
├── backend/             # NestJS backend API
├── ai-service/          # AI processing services
├── docs/                # Project documentation
│   ├── PROJECT_OVERVIEW.md
│   ├── IOS_DEPLOYMENT_GUIDE.md
│   ├── WEB_APP_GUIDE.md
│   └── API_DOCUMENTATION.md
└── README.md
```

## Core Features

### 1. Knowledge Graph
- **Visual Network**: Interactive graph visualization of people, places, events, and concepts
- **Natural Language Search**: Query your knowledge using everyday language (e.g., "photos from Paris 2023")
- **Relationship Strength**: Visual representation of connection strength through line thickness
- **Node Types**: Person, Company, Technology, Event, Place, Memory, Document
- **Expand/Collapse**: Control information hierarchy and complexity
- **Hover Highlights**: Highlight related nodes and connections on hover
- **Full-screen Mode**: Immersive viewing experience

### 2. Social Network
- **Contact Management**: Track interactions with contacts by frequency (High/Medium/Low)
- **Context Cards**: View when and where you met each person
- **Company Analysis**: Analyze industry types, company size, and business information
- **Interaction History**: Complete timeline of communications across channels
- **Network Analytics**: Statistics on total contacts, interactions, frequency distribution, and industry breakdown

### 3. Company Insights
- **Company Profiles**: Detailed information about companies in your network
- **Custom Notes**: Add multi-line text notes for each company
- **Tags**: Organize companies with custom tags
- **Filtering**: Search by company name, notes content, or tags
- **Contact Association**: View all contacts associated with each company
- **Hover Tooltips**: Quick preview of company contacts on card hover

### 4. Demo Mode
- **Example Memories**: Showcase memory cards extracted from photos
- **Knowledge Nodes**: Display sample people, companies, and concepts
- **How It Works**: Explain the 5-step photo information extraction process
- **Social Sharing**: Share example memories to Twitter, Facebook, LinkedIn

## Technology Stack

### Mobile App
- **Framework**: React Native
- **Language**: TypeScript
- **State Management**: React Context API
- **Navigation**: React Navigation
- **Storage**: AsyncStorage
- **Theme**: Dark/Light mode support

### Backend API
- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: PostgreSQL / MySQL
- **Authentication**: JWT
- **API Style**: RESTful

### Web App
- **Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **API**: tRPC 11
- **Database**: TiDB (MySQL-compatible)
- **Auth**: Manus OAuth
- **Visualization**: React Flow (knowledge graph)
- **Font**: Aeonik Medium

### AI Service
- **Framework**: Python
- **Image Analysis**: Computer Vision APIs
- **Text Extraction**: OCR
- **Knowledge Extraction**: NLP models

## Design Philosophy

### Visual Style
- **Minimal Black Theme**: Pure black background (#000000) inspired by syndicate.io
- **Frosted Glass**: iOS-style backdrop blur effects for cards and panels
- **Low Saturation**: Desaturated grayscale color scheme
- **Typography**: Aeonik font with smooth antialiasing
- **Spacing**: Generous whitespace for clarity

### User Experience
- **Progressive Disclosure**: Show essential information first, details on demand
- **Responsive Design**: Optimized for all screen sizes
- **Smooth Transitions**: Subtle animations for state changes
- **Keyboard Navigation**: Full keyboard accessibility
- **Touch Gestures**: Intuitive mobile interactions

## Data Flow

1. **Photo Upload**: User uploads photos via mobile app
2. **AI Analysis**: AI service extracts metadata, people, places, concepts
3. **Knowledge Graph**: Extracted information organized into nodes and relationships
4. **Social Network**: People and companies linked with interaction data
5. **Visualization**: Interactive graph and network views
6. **Search**: Natural language queries across all data

## Deployment

### Mobile App
- **iOS**: TestFlight → App Store
- **Android**: Google Play Console

### Backend
- **Production**: https://backend-7153iyjir-everest-ans-projects.vercel.app
- **Testing**: https://backend-ent2qiygb-everest-ans-projects.vercel.app
- **Platform**: Vercel

### Web App
- **Development**: Local development server
- **Production**: Manus platform deployment
- **Database**: TiDB Cloud

## Future Roadmap

### Phase 1 (Current)
- ✅ Knowledge graph visualization
- ✅ Social network management
- ✅ Company analysis
- ✅ Demo mode
- ✅ Minimal black UI theme

### Phase 2 (Planned)
- [ ] Real photo upload and AI analysis
- [ ] Voice transcription integration
- [ ] Timeline view of memories
- [ ] Export functionality (PDF, JSON)
- [ ] Collaboration features

### Phase 3 (Future)
- [ ] Mobile app parity with web features
- [ ] Offline mode
- [ ] Data encryption
- [ ] Third-party integrations (Calendar, Email, CRM)
- [ ] Advanced analytics and insights

## Contributing

For developers joining this project:

1. **Read Documentation**: Start with this overview, then dive into specific guides
2. **Setup Environment**: Follow setup instructions in README.md
3. **Code Style**: Follow existing patterns and conventions
4. **Testing**: Write tests for new features
5. **Documentation**: Update docs when adding features
6. **Commit Messages**: Use clear, descriptive commit messages

## Support

- **GitHub Issues**: Report bugs and request features
- **Documentation**: Check docs/ folder for detailed guides
- **Code Comments**: Inline comments explain complex logic

## License

[Specify your license here]

## Acknowledgments

- **Design Inspiration**: syndicate.io
- **Font**: Aeonik by CoType Foundry
- **Icons**: Lucide React
- **Visualization**: React Flow

---

Last Updated: October 31, 2025
