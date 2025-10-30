# Awareness Network - API Documentation

## Overview

The Awareness Network API is built with tRPC, providing end-to-end type safety between the frontend and backend. All API endpoints are accessible through the tRPC client with full TypeScript support.

## Base URLs

**Production**: `https://backend-7153iyjir-everest-ans-projects.vercel.app/api/trpc`
**Testing**: `https://backend-ent2qiygb-everest-ans-projects.vercel.app/api/trpc`

## Authentication

### OAuth Flow

1. Redirect user to login URL: `${VITE_OAUTH_PORTAL_URL}?app_id=${VITE_APP_ID}&redirect_uri=${YOUR_CALLBACK_URL}`
2. User completes OAuth on Manus platform
3. Platform redirects to `/api/oauth/callback` with auth code
4. Backend sets session cookie
5. Subsequent requests include cookie automatically

### Session Management

**Get Current User**
```typescript
// Frontend
const { data: user } = trpc.auth.me.useQuery();

// Response
{
  id: number;
  openId: string;
  name: string | null;
  email: string | null;
  role: 'admin' | 'user';
  createdAt: Date;
  lastSignedIn: Date;
}
```

**Logout**
```typescript
// Frontend
const logout = trpc.auth.logout.useMutation();
logout.mutate();

// Response
{ success: true }
```

## Knowledge Graph API

### Get Knowledge Graph

Retrieve all knowledge nodes and connections for the authenticated user.

```typescript
// Frontend
const { data } = trpc.knowledge.getGraph.useQuery();

// Response
{
  nodes: Array<{
    id: number;
    userId: number;
    type: 'person' | 'company' | 'technology' | 'event' | 'place' | 'memory' | 'document';
    title: string;
    metadata: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
  }>;
  connections: Array<{
    id: number;
    userId: number;
    sourceId: number;
    targetId: number;
    strength: number; // 0.0 - 1.0
    type: string;
    createdAt: Date;
  }>;
}
```

### Search Knowledge

Search knowledge nodes using natural language or filters.

```typescript
// Frontend
const { data } = trpc.knowledge.search.useQuery({
  query: "photos from Paris 2023",
  types: ['memory', 'place'],
});

// Input
{
  query: string;
  types?: Array<'person' | 'company' | 'technology' | 'event' | 'place' | 'memory' | 'document'>;
}

// Response
{
  nodes: Array<KnowledgeNode>;
}
```

### Get Node Details

Retrieve detailed information about a specific knowledge node.

```typescript
// Frontend
const { data } = trpc.knowledge.getNode.useQuery({ id: 123 });

// Input
{
  id: number;
}

// Response
{
  node: KnowledgeNode;
  connections: Array<{
    connectedNode: KnowledgeNode;
    strength: number;
    type: string;
  }>;
}
```

## Social Network API

### Get Contacts

Retrieve all contacts for the authenticated user.

```typescript
// Frontend
const { data } = trpc.network.getContacts.useQuery();

// Response
{
  contacts: Array<{
    id: number;
    userId: number;
    name: string;
    company: string | null;
    position: string | null;
    frequency: 'high' | 'medium' | 'low';
    metWhen: string | null;
    metWhere: string | null;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
  }>;
}
```

### Get Network Analytics

Retrieve analytics and statistics about the user's social network.

```typescript
// Frontend
const { data } = trpc.network.getAnalytics.useQuery();

// Response
{
  totalContacts: number;
  totalInteractions: number;
  frequencyDistribution: {
    high: number;
    medium: number;
    low: number;
  };
  industryDistribution: Record<string, number>;
  recentInteractions: Array<{
    contactName: string;
    type: string;
    date: Date;
  }>;
}
```

### Add Contact

Create a new contact in the user's network.

```typescript
// Frontend
const addContact = trpc.network.addContact.useMutation();
addContact.mutate({
  name: "John Doe",
  company: "Acme Corp",
  position: "CEO",
  frequency: "high",
  metWhen: "2024-01-15",
  metWhere: "Tech Conference",
  notes: "Met at keynote speech",
});

// Input
{
  name: string;
  company?: string;
  position?: string;
  frequency: 'high' | 'medium' | 'low';
  metWhen?: string;
  metWhere?: string;
  notes?: string;
}

// Response
{
  contact: NetworkContact;
}
```

### Update Contact

Update an existing contact's information.

```typescript
// Frontend
const updateContact = trpc.network.updateContact.useMutation();
updateContact.mutate({
  id: 123,
  notes: "Updated notes",
  frequency: "medium",
});

// Input
{
  id: number;
  name?: string;
  company?: string;
  position?: string;
  frequency?: 'high' | 'medium' | 'low';
  metWhen?: string;
  metWhere?: string;
  notes?: string;
}

// Response
{
  contact: NetworkContact;
}
```

### Add Interaction

Record a new interaction with a contact.

```typescript
// Frontend
const addInteraction = trpc.network.addInteraction.useMutation();
addInteraction.mutate({
  contactId: 123,
  type: "meeting",
  date: "2024-10-31",
  notes: "Discussed partnership opportunities",
});

// Input
{
  contactId: number;
  type: 'email' | 'call' | 'meeting' | 'message';
  date: string;
  notes?: string;
}

// Response
{
  interaction: Interaction;
}
```

## Company API

### Get All Companies

Retrieve all companies in the user's network.

```typescript
// Frontend
const { data } = trpc.company.getAll.useQuery();

// Response
{
  companies: Array<{
    id: number;
    userId: number;
    name: string;
    industry: string | null;
    size: string | null;
    description: string | null;
    notes: string | null;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
    contacts: Array<NetworkContact>;
  }>;
}
```

### Update Company

Update company information, notes, or tags.

```typescript
// Frontend
const updateCompany = trpc.company.update.useMutation();
updateCompany.mutate({
  id: 123,
  notes: "Potential client for Q1 2025",
  tags: ["prospect", "enterprise", "priority"],
});

// Input
{
  id: number;
  name?: string;
  industry?: string;
  size?: string;
  description?: string;
  notes?: string;
  tags?: string[];
}

// Response
{
  company: Company;
}
```

### Get Company Details

Retrieve detailed information about a specific company.

```typescript
// Frontend
const { data } = trpc.company.getDetails.useQuery({ id: 123 });

// Input
{
  id: number;
}

// Response
{
  company: Company;
  contacts: Array<NetworkContact>;
  recentInteractions: Array<Interaction>;
}
```

## Error Handling

### Error Response Format

```typescript
{
  error: {
    code: string; // 'UNAUTHORIZED' | 'FORBIDDEN' | 'NOT_FOUND' | 'BAD_REQUEST' | 'INTERNAL_SERVER_ERROR'
    message: string;
  }
}
```

### Common Error Codes

**UNAUTHORIZED** (401)
- User not authenticated
- Session expired
- Invalid credentials

**FORBIDDEN** (403)
- Insufficient permissions
- Resource belongs to another user

**NOT_FOUND** (404)
- Resource does not exist
- Invalid ID

**BAD_REQUEST** (400)
- Invalid input data
- Missing required fields
- Validation failed

**INTERNAL_SERVER_ERROR** (500)
- Database connection failed
- Unexpected server error

### Frontend Error Handling

```typescript
const { data, error, isError } = trpc.knowledge.getGraph.useQuery();

if (isError) {
  console.error('Error:', error.message);
  // Handle error (show toast, redirect, etc.)
}
```

## Rate Limiting

Currently, there are no rate limits enforced. This may change in future versions.

## Pagination

For endpoints returning large datasets, pagination will be added in future versions:

```typescript
// Future API
const { data } = trpc.network.getContacts.useQuery({
  page: 1,
  limit: 50,
});

// Future Response
{
  contacts: Array<NetworkContact>;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
```

## Webhooks

Webhooks are not currently supported but may be added in future versions for:
- New contact added
- Interaction recorded
- Knowledge graph updated

## Data Export

### Export Knowledge Graph

```typescript
// Future API
const exportGraph = trpc.knowledge.export.useMutation();
exportGraph.mutate({ format: 'json' });

// Response
{
  url: string; // Download URL
  expiresAt: Date;
}
```

### Export Contacts

```typescript
// Future API
const exportContacts = trpc.network.exportContacts.useMutation();
exportContacts.mutate({ format: 'csv' });

// Response
{
  url: string; // Download URL
  expiresAt: Date;
}
```

## Best Practices

### Optimistic Updates

For better UX, use optimistic updates for mutations:

```typescript
const updateContact = trpc.network.updateContact.useMutation({
  onMutate: async (newData) => {
    // Cancel outgoing refetches
    await trpc.useUtils().network.getContacts.cancel();
    
    // Snapshot previous value
    const previous = trpc.useUtils().network.getContacts.getData();
    
    // Optimistically update cache
    trpc.useUtils().network.getContacts.setData(undefined, (old) => {
      if (!old) return old;
      return {
        contacts: old.contacts.map(c => 
          c.id === newData.id ? { ...c, ...newData } : c
        ),
      };
    });
    
    return { previous };
  },
  onError: (err, newData, context) => {
    // Rollback on error
    trpc.useUtils().network.getContacts.setData(undefined, context?.previous);
  },
  onSettled: () => {
    // Refetch after mutation
    trpc.useUtils().network.getContacts.invalidate();
  },
});
```

### Caching Strategy

tRPC uses React Query for caching. Default settings:
- `staleTime`: 0 (always refetch on mount)
- `cacheTime`: 5 minutes

Override for specific queries:

```typescript
const { data } = trpc.knowledge.getGraph.useQuery(undefined, {
  staleTime: 60000, // 1 minute
  cacheTime: 300000, // 5 minutes
  refetchOnWindowFocus: false,
});
```

### Batch Requests

tRPC automatically batches requests made within 10ms:

```typescript
// These will be batched into a single HTTP request
const contacts = trpc.network.getContacts.useQuery();
const analytics = trpc.network.getAnalytics.useQuery();
const companies = trpc.company.getAll.useQuery();
```

## Testing

### Mock tRPC Client

```typescript
import { createTRPCMsw } from 'msw-trpc';
import type { AppRouter } from '../server/routers';

const trpcMsw = createTRPCMsw<AppRouter>();

// Mock response
server.use(
  trpcMsw.knowledge.getGraph.query(() => {
    return {
      nodes: [/* mock data */],
      connections: [/* mock data */],
    };
  })
);
```

## Changelog

### v1.0.0 (2025-10-31)
- Initial API release
- Knowledge graph endpoints
- Social network endpoints
- Company management endpoints
- Authentication via Manus OAuth

---

Last Updated: October 31, 2025
