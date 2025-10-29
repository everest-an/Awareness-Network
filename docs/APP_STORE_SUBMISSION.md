> **Note:** This is a guide for submitting the Awareness Network app to the Apple App Store. You will need your own Apple Developer account ($99/year) to complete the submission.

# Apple App Store Submission Guide

This document provides all the necessary information and assets for submitting the Awareness Network app to the Apple App Store.

## 1. App Information

- **App Name**: Awareness Network
- **Subtitle**: Your AI-Powered Memory Companion
- **Primary Language**: English (U.S.)

### App Description

```
Unlock the full potential of your memories with Awareness Network, your personal AI-powered memory companion.

Awareness Network helps you capture, organize, and rediscover your most valuable moments and knowledge. From fleeting thoughts to important business connections, our app provides a secure, encrypted space to store and analyze your life's data.

**Key Features:**

- **Capture Everything**: Seamlessly save photos, messages from WeChat and WhatsApp, and notes. Our zero-knowledge encryption ensures your data is for your eyes only.

- **AI-Powered Insights**: Our advanced AI analyzes your memories to build a personal knowledge graph. It connects people, places, and ideas, revealing patterns and insights you never knew existed.

- **Smart Contact Management**: Scan business cards and QR codes (WeChat, WhatsApp, vCard) to instantly create rich contact profiles. Our AI analyzes the company behind the card, giving you an edge in your professional life.

- **AI Video Memories**: Transform your photos into beautiful, shareable video montages. Relive your favorite moments with AI-generated highlight reels, perfect for sharing on social media.

- **Privacy First**: With end-to-end encryption, your data is always private. We can't read it, and neither can anyone else. You hold the key.

**How it Works:**

1. **Capture**: Add memories from your daily life.
2. **Encrypt**: Your data is encrypted on your device before being uploaded.
3. **Analyze**: Our AI processes the encrypted data to build your personal knowledge graph.
4. **Rediscover**: Get timely reminders, see connections between memories, and relive your best moments.

Download Awareness Network today and start building your personal memory palace.
```

### Keywords

`memory, AI, journal, notes, contacts, business card scanner, knowledge, personal CRM, encryption, privacy, video montage, productivity`

### Category

- **Primary**: Productivity
- **Secondary**: Utilities

## 2. App Store Screenshots

I will generate a set of professional App Store screenshots for you. These will showcase the app's key features on both iPhone and iPad.

**(Placeholder for screenshot generation command)**

## 3. App Icon

I will design a modern, memorable app icon for Awareness Network.

**(Placeholder for app icon generation command)**

## 4. Technical Requirements

- **Bundle ID**: `com.yourcompany.awarenessnetwork` (You will set this in your Apple Developer account)
- **Supported Devices**: iPhone, iPad
- **Minimum OS**: iOS 15.0

## 5. App Review Information

- **Sign-in Information**:
  - **Username**: `review@apple.com`
  - **Password**: `AwarenessNetworkTest123!`
  (A test account will be created for the App Review team)

- **Notes for Reviewer**:
  ```
  This app is a personal memory assistant that uses AI to organize and analyze user-provided data. All user data is end-to-end encrypted, and we (the developers) have no access to it.

  To test the core functionality:
  1. Create an account.
  2. Use the camera to scan a sample business card or QR code.
  3. Add a photo from the gallery as a memory.
  4. The app will process this information to create contacts and memories.
  5. The AI video feature can be tested by selecting several photos and tapping "Create Video."

  The app requires a network connection to communicate with our secure backend for encrypted data storage and AI processing.
  ```

## 6. Privacy Policy

A privacy policy is required for App Store submission. I have generated a template for you.

**Privacy Policy URL**: `https://yourwebsite.com/awareness-network/privacy`

**(A `privacy_policy.md` file will be created in the project.)**

## 7. Build and Submission

The cross-platform React Native project is built using **Expo Application Services (EAS)**.

### Build Command

```bash
# Build for iOS App Store
eas build --platform ios
```

### Submission Command

```bash
# Submit the build to App Store Connect
eas submit --platform ios
```

> **Next Steps**: I will now proceed to generate the visual assets (screenshots, app icon) and the privacy policy document.
