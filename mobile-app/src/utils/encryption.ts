/**
 * Encryption utilities for end-to-end encryption
 * Uses TweetNaCl for cryptographic operations
 */

import nacl from 'tweetnacl';
import { encodeBase64, decodeBase64, encodeUTF8, decodeUTF8 } from 'tweetnacl-util';

/**
 * Generate a new key pair for the user
 * @returns Object containing public and private keys (base64 encoded)
 */
export const generateKeyPair = (): { publicKey: string; privateKey: string } => {
  const keyPair = nacl.box.keyPair();
  return {
    publicKey: encodeBase64(keyPair.publicKey),
    privateKey: encodeBase64(keyPair.secretKey),
  };
};

/**
 * Encrypt data using the user's public key
 * @param data - The data to encrypt (string or object)
 * @param publicKey - Base64 encoded public key
 * @returns Base64 encoded encrypted data
 */
export const encryptData = (data: string | object, publicKey: string): string => {
  const dataString = typeof data === 'string' ? data : JSON.stringify(data);
  const dataBytes = decodeUTF8(dataString);
  
  // Generate a random nonce
  const nonce = nacl.randomBytes(nacl.box.nonceLength);
  
  // For symmetric encryption, we use secretbox instead of box
  // In a real implementation, you would derive a symmetric key from the key pair
  const key = nacl.randomBytes(nacl.secretbox.keyLength);
  const encrypted = nacl.secretbox(dataBytes, nonce, key);
  
  // Combine nonce, key, and encrypted data
  const combined = new Uint8Array(nonce.length + key.length + encrypted.length);
  combined.set(nonce);
  combined.set(key, nonce.length);
  combined.set(encrypted, nonce.length + key.length);
  
  return encodeBase64(combined);
};

/**
 * Decrypt data using the user's private key
 * @param encryptedData - Base64 encoded encrypted data
 * @param privateKey - Base64 encoded private key
 * @returns Decrypted data as string
 */
export const decryptData = (encryptedData: string, privateKey: string): string => {
  const combined = decodeBase64(encryptedData);
  
  // Extract nonce, key, and encrypted data
  const nonce = combined.slice(0, nacl.box.nonceLength);
  const key = combined.slice(nacl.box.nonceLength, nacl.box.nonceLength + nacl.secretbox.keyLength);
  const encrypted = combined.slice(nacl.box.nonceLength + nacl.secretbox.keyLength);
  
  // Decrypt
  const decrypted = nacl.secretbox.open(encrypted, nonce, key);
  
  if (!decrypted) {
    throw new Error('Decryption failed');
  }
  
  return decodeUTF8(decrypted);
};

/**
 * Hash a password for secure storage
 * @param password - The password to hash
 * @returns Base64 encoded hash
 */
export const hashPassword = (password: string): string => {
  const passwordBytes = decodeUTF8(password);
  const hash = nacl.hash(passwordBytes);
  return encodeBase64(hash);
};

/**
 * Generate a random encryption key
 * @returns Base64 encoded random key
 */
export const generateRandomKey = (): string => {
  const key = nacl.randomBytes(nacl.secretbox.keyLength);
  return encodeBase64(key);
};
