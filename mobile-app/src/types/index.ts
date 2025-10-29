/**
 * Core type definitions for the Awareness Network application
 */

export type MemoryType = 'photo' | 'message' | 'contact' | 'note';

export interface Memory {
  memoryId: string;
  userId: string;
  type: MemoryType;
  encryptedContent: string; // Base64 encoded encrypted blob
  encryptedMetadata: string; // Base64 encoded encrypted metadata
  sourceApp?: string;
  capturedAt: string; // ISO timestamp
  createdAt: string;
  updatedAt: string;
}

export interface Contact {
  contactId: string;
  userId: string;
  encryptedData: string; // Encrypted contact details
  sourceMemoryId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface DecryptedContact {
  name: string;
  company?: string;
  title?: string;
  email?: string;
  phone?: string;
  address?: string;
  notes?: string;
}

export interface User {
  userId: string;
  email: string;
  publicKey: string;
  createdAt: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  privateKey: string | null; // Stored securely on device
}

export interface Job {
  jobId: string;
  type: 'ocr' | 'video-montage' | 'knowledge-graph';
  status: 'pending' | 'processing' | 'completed' | 'failed';
  result?: any;
  createdAt: string;
  updatedAt: string;
}

export interface VideoMontageRequest {
  memoryIds: string[];
  style: 'scenic' | 'artistic' | 'entertainment' | 'professional';
  title?: string;
}
