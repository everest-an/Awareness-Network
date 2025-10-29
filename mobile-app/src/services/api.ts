/**
 * API service for communicating with the Awareness Network backend
 */

import axios, { AxiosInstance } from 'axios';
import { Memory, Contact, Job, VideoMontageRequest } from '../types';

// Backend API base URL - will be configured based on environment
const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api';

class ApiService {
  private client: AxiosInstance;
  private token: string | null = null;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add request interceptor to include auth token
    this.client.interceptors.request.use((config) => {
      if (this.token) {
        config.headers.Authorization = `Bearer ${this.token}`;
      }
      return config;
    });
  }

  /**
   * Set the authentication token for API requests
   */
  setAuthToken(token: string) {
    this.token = token;
  }

  /**
   * Clear the authentication token
   */
  clearAuthToken() {
    this.token = null;
  }

  // Authentication endpoints
  async register(email: string, password: string, publicKey: string) {
    const response = await this.client.post('/auth/register', {
      email,
      password,
      publicKey,
    });
    return response.data;
  }

  async login(email: string, password: string) {
    const response = await this.client.post('/auth/login', {
      email,
      password,
    });
    return response.data;
  }

  async refreshToken(refreshToken: string) {
    const response = await this.client.post('/auth/refresh', {
      refreshToken,
    });
    return response.data;
  }

  // Memory endpoints
  async uploadMemory(memory: Omit<Memory, 'memoryId' | 'userId' | 'createdAt' | 'updatedAt'>) {
    const response = await this.client.post('/memories', memory);
    return response.data;
  }

  async getMemories(limit: number = 50, offset: number = 0): Promise<Memory[]> {
    const response = await this.client.get('/memories', {
      params: { limit, offset },
    });
    return response.data;
  }

  async getMemory(memoryId: string): Promise<Memory> {
    const response = await this.client.get(`/memories/${memoryId}`);
    return response.data;
  }

  async deleteMemory(memoryId: string) {
    const response = await this.client.delete(`/memories/${memoryId}`);
    return response.data;
  }

  // Contact endpoints
  async getContacts(): Promise<Contact[]> {
    const response = await this.client.get('/contacts');
    return response.data;
  }

  async createContact(contact: Omit<Contact, 'contactId' | 'userId' | 'createdAt' | 'updatedAt'>) {
    const response = await this.client.post('/contacts', contact);
    return response.data;
  }

  // AI Job endpoints
  async submitOcrJob(memoryId: string): Promise<Job> {
    const response = await this.client.post('/jobs/ocr', { memoryId });
    return response.data;
  }

  async submitVideoMontageJob(request: VideoMontageRequest): Promise<Job> {
    const response = await this.client.post('/jobs/video-montage', request);
    return response.data;
  }

  async getJobStatus(jobId: string): Promise<Job> {
    const response = await this.client.get(`/jobs/${jobId}`);
    return response.data;
  }
}

export default new ApiService();
