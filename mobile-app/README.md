# Awareness Network Mobile App

The cross-platform mobile application for Awareness Network, built with React Native and Expo.

## Features

- **Secure Authentication**: User registration and login with end-to-end encryption
- **Memory Capture**: Upload photos from camera or gallery with client-side encryption
- **Contact Management**: Scan and organize business cards with AI-powered OCR
- **Video Memories**: Create AI-generated video montages from your photos
- **Zero-Knowledge Architecture**: All data is encrypted on device before upload

## Technology Stack

- **React Native** with **Expo** for cross-platform development
- **Redux Toolkit** for state management
- **React Navigation** for routing
- **TweetNaCl** for cryptography
- **Axios** for API communication

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- iOS Simulator (macOS) or Android Emulator
- Expo Go app (for testing on physical devices)

### Installation

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm start

# Run on iOS simulator
pnpm run ios

# Run on Android emulator
pnpm run android

# Run in web browser
pnpm run web
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── screens/        # Screen components
├── navigation/     # Navigation configuration
├── store/          # Redux store and slices
├── services/       # API and external services
├── utils/          # Utility functions (encryption, etc.)
├── types/          # TypeScript type definitions
└── constants/      # App constants
```

## Environment Variables

Create a `.env` file in the root directory:

```
EXPO_PUBLIC_API_URL=https://api.awareness-network.com
```

## Building for Production

### iOS

```bash
# Build for iOS App Store
eas build --platform ios

# Submit to App Store
eas submit --platform ios
```

### Android

```bash
# Build for Google Play Store
eas build --platform android

# Submit to Play Store
eas submit --platform android
```

## Security

All user data is encrypted on the device before being transmitted to the backend. The app uses a zero-knowledge architecture, meaning the server never has access to unencrypted user data.

## License

Copyright © 2025 Awareness Network. All rights reserved.
