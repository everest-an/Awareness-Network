# Awareness Network - Web Application Guide

## Overview

The Awareness Network web application is built with React 19, tRPC 11, and Tailwind CSS 4, providing a modern, type-safe full-stack experience. This guide covers setup, architecture, and development workflows.

## Getting Started

### Prerequisites

- Node.js 22.x
- pnpm package manager
- TiDB Cloud account (or MySQL-compatible database)
- Manus platform account

### Installation

```bash
# Navigate to web app directory
cd awareness-network-web

# Install dependencies
pnpm install

# Setup environment variables
# Copy .env.example to .env and fill in values

# Push database schema
pnpm db:push

# Start development server
pnpm dev
```

### Environment Variables

The following environment variables are automatically injected by the Manus platform:

- `DATABASE_URL`: TiDB connection string
- `JWT_SECRET`: Session signing secret
- `VITE_APP_ID`: Manus OAuth application ID
- `OAUTH_SERVER_URL`: OAuth backend URL
- `VITE_OAUTH_PORTAL_URL`: OAuth frontend URL
- `OWNER_OPEN_ID`: Project owner's ID
- `OWNER_NAME`: Project owner's name
- `VITE_APP_TITLE`: Application title
- `VITE_APP_LOGO`: Logo URL
- `BUILT_IN_FORGE_API_URL`: Manus built-in APIs
- `BUILT_IN_FORGE_API_KEY`: API authentication token

## Architecture

### Directory Structure

```
awareness-network-web/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   │   └── fonts/         # Custom fonts (Aeonik)
│   ├── src/
│   │   ├── _core/         # Core utilities and hooks
│   │   ├── components/    # Reusable UI components
│   │   │   └── ui/        # shadcn/ui components
│   │   ├── contexts/      # React contexts
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utility libraries
│   │   │   └── trpc.ts    # tRPC client setup
│   │   ├── pages/         # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── KnowledgeGraph.tsx
│   │   │   ├── Network.tsx
│   │   │   └── Demo.tsx
│   │   ├── App.tsx        # Main app component
│   │   ├── main.tsx       # Entry point
│   │   └── index.css      # Global styles
│   └── index.html         # HTML template
├── server/                # Backend Express + tRPC
│   ├── _core/            # Core server utilities
│   ├── db.ts             # Database query helpers
│   ├── routers.ts        # tRPC router definitions
│   └── storage.ts        # S3 storage helpers
├── drizzle/              # Database schema and migrations
│   └── schema.ts         # Drizzle ORM schema
├── shared/               # Shared types and constants
└── package.json          # Dependencies and scripts
```

### Technology Stack

**Frontend**
- React 19 with TypeScript
- Tailwind CSS 4 for styling
- shadcn/ui component library
- React Flow for graph visualization
- Wouter for routing
- tRPC React Query hooks

**Backend**
- Express 4 web server
- tRPC 11 for type-safe APIs
- Drizzle ORM for database
- Manus OAuth for authentication
- S3 for file storage

**Database**
- TiDB Cloud (MySQL-compatible)
- Drizzle migrations
- Connection pooling

## Database Schema

### Core Tables

**users**
- `id`: Auto-increment primary key
- `openId`: Manus OAuth identifier (unique)
- `name`: User's display name
- `email`: User's email address
- `loginMethod`: OAuth provider
- `role`: User role (admin/user)
- `createdAt`: Account creation timestamp
- `updatedAt`: Last update timestamp
- `lastSignedIn`: Last login timestamp

**knowledge_nodes**
- `id`: Auto-increment primary key
- `userId`: Foreign key to users
- `type`: Node type (person/company/technology/event/place/memory/document)
- `title`: Node title
- `metadata`: JSON field for additional data
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

**knowledge_connections**
- `id`: Auto-increment primary key
- `userId`: Foreign key to users
- `sourceId`: Source node ID
- `targetId`: Target node ID
- `strength`: Connection strength (0.0-1.0)
- `type`: Connection type
- `createdAt`: Creation timestamp

**network_contacts**
- `id`: Auto-increment primary key
- `userId`: Foreign key to users
- `name`: Contact name
- `company`: Company name
- `position`: Job title
- `frequency`: Interaction frequency (high/medium/low)
- `metWhen`: When you met
- `metWhere`: Where you met
- `notes`: Additional notes
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

**interactions**
- `id`: Auto-increment primary key
- `userId`: Foreign key to users
- `contactId`: Foreign key to network_contacts
- `type`: Interaction type (email/call/meeting/message)
- `date`: Interaction date
- `notes`: Interaction notes
- `createdAt`: Creation timestamp

**companies**
- `id`: Auto-increment primary key
- `userId`: Foreign key to users
- `name`: Company name (unique per user)
- `industry`: Industry type
- `size`: Company size
- `description`: Company description
- `notes`: Custom notes
- `tags`: JSON array of tags
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

### Schema Management

```bash
# Generate migration
pnpm drizzle-kit generate

# Push schema changes
pnpm db:push

# View database in Drizzle Studio
pnpm drizzle-kit studio
```

## API Development

### tRPC Router Structure

The main router is defined in `server/routers.ts`:

```typescript
export const appRouter = router({
  auth: router({
    me: publicProcedure.query(/* ... */),
    logout: publicProcedure.mutation(/* ... */),
  }),
  
  knowledge: router({
    getGraph: protectedProcedure.query(/* ... */),
    search: protectedProcedure.input(/* ... */).query(/* ... */),
    getNode: protectedProcedure.input(/* ... */).query(/* ... */),
  }),
  
  network: router({
    getContacts: protectedProcedure.query(/* ... */),
    getAnalytics: protectedProcedure.query(/* ... */),
    addContact: protectedProcedure.input(/* ... */).mutation(/* ... */),
  }),
  
  company: router({
    getAll: protectedProcedure.query(/* ... */),
    update: protectedProcedure.input(/* ... */).mutation(/* ... */),
  }),
});
```

### Database Query Helpers

Database queries are centralized in `server/db.ts`:

```typescript
// Example: Get knowledge graph for user
export async function getKnowledgeGraph(userId: number) {
  const db = await getDb();
  if (!db) return { nodes: [], connections: [] };
  
  const nodes = await db
    .select()
    .from(knowledgeNodes)
    .where(eq(knowledgeNodes.userId, userId));
    
  const connections = await db
    .select()
    .from(knowledgeConnections)
    .where(eq(knowledgeConnections.userId, userId));
    
  return { nodes, connections };
}
```

### Frontend API Calls

Use tRPC hooks in React components:

```typescript
// Query example
const { data, isLoading } = trpc.knowledge.getGraph.useQuery();

// Mutation example
const updateCompany = trpc.company.update.useMutation({
  onSuccess: () => {
    // Invalidate cache
    trpc.useUtils().company.getAll.invalidate();
  },
});

// Call mutation
updateCompany.mutate({
  id: companyId,
  notes: "Updated notes",
  tags: ["tag1", "tag2"],
});
```

## UI Development

### Design System

**Colors**
- Background: Pure black (#000000)
- Foreground: White with opacity (90%, 50%, 40%)
- Cards: white/[0.02] background + white/5 border
- Primary button: White background + black text
- Secondary button: Transparent with white/10 border

**Typography**
- Font: Aeonik Medium
- Sizes: text-6xl (hero), text-2xl (section), text-xl (subsection)
- Weights: font-medium (500)

**Spacing**
- Container: max-w-4xl for content, max-w-3xl for features
- Padding: py-20 (sections), p-5 (cards)
- Gap: gap-6 (grids), gap-4 (lists)

**Effects**
- Glass: backdrop-filter blur(20px) + rgba background
- Transitions: transition-all for smooth state changes
- Hover: hover:bg-white/5 for interactive elements

### Component Guidelines

**Cards**
```tsx
<Card className="glass hover:bg-white/5 transition-all border-white/5 bg-white/[0.02]">
  <CardHeader>
    <CardTitle className="text-white">Title</CardTitle>
    <CardDescription className="text-white/50">Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

**Buttons**
```tsx
{/* Primary */}
<Button className="bg-white text-black hover:bg-white/90">
  Action
</Button>

{/* Secondary */}
<Button variant="outline" className="glass border-white/10 hover:bg-white/5">
  Action
</Button>
```

**Glass Panels**
```tsx
<div className="glass-dark border-b border-white/5">
  {/* Content */}
</div>
```

## Knowledge Graph Implementation

### React Flow Setup

```typescript
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

function KnowledgeGraph() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      minZoom={0.1}
      maxZoom={4}
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
}
```

### Node Styling

```typescript
const nodeStyle = {
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '8px',
  padding: '12px',
  color: 'rgba(255, 255, 255, 0.9)',
};

const nodes: Node[] = data.map(item => ({
  id: item.id.toString(),
  type: 'default',
  position: { x: 0, y: 0 }, // Use layout algorithm
  data: { label: item.title },
  style: nodeStyle,
}));
```

### Edge Styling

```typescript
const edges: Edge[] = connections.map(conn => ({
  id: `${conn.sourceId}-${conn.targetId}`,
  source: conn.sourceId.toString(),
  target: conn.targetId.toString(),
  style: {
    stroke: 'rgba(255, 255, 255, 0.2)',
    strokeWidth: conn.strength * 3, // Thickness = strength
  },
}));
```

## Deployment

### Development

```bash
# Start dev server
pnpm dev

# Access at http://localhost:3000
```

### Production Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Manus Platform Deployment

1. Save checkpoint: Use `webdev_save_checkpoint` tool
2. Click "Publish" button in Management UI
3. Configure custom domain (optional)
4. Monitor deployment status in Dashboard

### Database Management

Access database via Management UI:
1. Click "Database" tab
2. View/edit records in CRUD interface
3. Connection info in bottom-left settings
4. Enable SSL for secure connections

## Testing

### Manual Testing Checklist

**Knowledge Graph**
- [ ] Nodes render correctly
- [ ] Connections show proper strength
- [ ] Search filters work
- [ ] Node details display on click
- [ ] Expand/collapse functions
- [ ] Hover highlights related nodes
- [ ] Full-screen mode works
- [ ] Zoom and pan smooth

**Social Network**
- [ ] Contacts list loads
- [ ] Frequency filter works
- [ ] Contact details display
- [ ] Company analysis shows data
- [ ] Interaction history accurate

**Company Management**
- [ ] Company list displays
- [ ] Notes save correctly
- [ ] Tags add/remove properly
- [ ] Filter by tag works
- [ ] Search by name/notes works
- [ ] Hover tooltip shows contacts

**Demo Mode**
- [ ] Example memories display
- [ ] Knowledge nodes render
- [ ] How it works section clear
- [ ] Social sharing works

## Troubleshooting

### Common Issues

**Database Connection Failed**
- Check DATABASE_URL in environment
- Verify TiDB cluster is running
- Enable SSL if required

**tRPC Type Errors**
- Regenerate types: `pnpm typecheck`
- Restart dev server
- Check router exports

**Styles Not Applying**
- Clear Tailwind cache: `rm -rf .next`
- Restart dev server
- Check class name syntax

**Graph Not Rendering**
- Verify React Flow CSS imported
- Check node/edge data structure
- Inspect browser console for errors

## Best Practices

### Code Organization
- Keep components under 300 lines
- Extract reusable logic to hooks
- Centralize API calls in query helpers
- Use TypeScript strictly

### Performance
- Lazy load heavy components
- Memoize expensive computations
- Use React Query caching
- Optimize images and assets

### Security
- Never expose secrets in frontend
- Validate all user inputs
- Use protectedProcedure for sensitive data
- Sanitize database queries

### Accessibility
- Use semantic HTML
- Add ARIA labels
- Support keyboard navigation
- Maintain color contrast

## Resources

- [React Documentation](https://react.dev)
- [tRPC Documentation](https://trpc.io)
- [Tailwind CSS](https://tailwindcss.com)
- [React Flow](https://reactflow.dev)
- [Drizzle ORM](https://orm.drizzle.team)

---

Last Updated: October 31, 2025
