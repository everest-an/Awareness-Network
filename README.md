# Awareness Network

**Your AI-Powered Memory Companion**

Awareness Network is a comprehensive memory management and knowledge organization platform that helps you capture, analyze, and rediscover your most valuable moments and connections.

## 🌟 Key Features

### 1. **Smart Contact Management**
- **Business Card OCR**: AI-powered extraction of contact information from business cards
- **QR Code Scanning**: Support for WeChat, WhatsApp, Telegram, and vCard formats
- **Company Intelligence**: Automatic analysis of companies and industries
- **Contact Enrichment**: Build rich profiles with context and meeting notes

### 2. **Memory Capture & Organization**
- **Multi-Source Integration**: Photos, messages from WeChat/WhatsApp, notes
- **AI-Powered Tagging**: Automatic categorization and tagging
- **Knowledge Graph**: Connect people, places, and events
- **Smart Search**: Find memories by people, location, or context

### 3. **AI Video Memories**
- **Auto-Generated Montages**: Create beautiful video memories from photos
- **Style Selection**: Choose from various themes (travel, art, entertainment)
- **Quick Sharing**: One-tap sharing to social media

### 4. **Privacy & Security**
- **Zero-Knowledge Architecture**: All data encrypted on device
- **End-to-End Encryption**: Server never has access to your data
- **Client-Side Keys**: You control your encryption keys

## 📁 Project Structure

```
Awareness-Network/
├── whitepaper.md                    # Comprehensive project whitepaper
├── technical_specifications.md      # Technical architecture and specs
├── mobile-app/                      # React Native mobile application
│   ├── src/
│   │   ├── screens/                 # App screens
│   │   ├── components/              # Reusable components
│   │   ├── services/                # API and services
│   │   ├── store/                   # Redux state management
│   │   └── utils/                   # Utilities (encryption, etc.)
│   └── app.json                     # Expo configuration
├── backend/                         # NestJS backend API
│   ├── src/
│   │   ├── auth/                    # Authentication module
│   │   ├── users/                   # User management
│   │   ├── memories/                # Memory storage
│   │   ├── contacts/                # Contact management
│   │   └── jobs/                    # AI processing jobs
│   └── package.json
├── ai-services/                     # Python AI services
│   ├── src/
│   │   ├── ocr/                     # OCR and QR code scanning
│   │   │   ├── processor.py         # Business card OCR
│   │   │   ├── qr_scanner.py        # QR code detection
│   │   │   ├── integrated_scanner.py # Combined scanner
│   │   │   └── api.py               # Flask API
│   │   ├── video/                   # Video generation
│   │   └── knowledge/               # Knowledge graph
│   └── requirements.txt
├── docs/                            # Documentation
│   ├── OCR_QR_FEATURE.md           # OCR/QR feature docs
│   ├── APP_STORE_SUBMISSION.md     # App Store guide
│   └── PRIVACY_POLICY.md           # Privacy policy
└── assets/                          # App Store assets
    ├── app-icon.png
    └── screenshot-*.png
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and pnpm
- **Python** 3.11+
- **PostgreSQL** 14+
- **Apple Developer Account** (for App Store submission)

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Awareness-Network.git
cd Awareness-Network
```

#### 2. Setup Backend

```bash
cd backend
pnpm install
cp .env.example .env
# Edit .env with your configuration
pnpm run start:dev
```

#### 3. Setup AI Services

```bash
cd ai-services
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
# Set environment variables
export OPENAI_API_KEY=your_key
python src/ocr/api.py
```

#### 4. Setup Mobile App

```bash
cd mobile-app
pnpm install
pnpm start
```

## 🔧 Configuration

### Environment Variables

**Backend (.env)**
```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=awareness_network
JWT_SECRET=your_secret_key
```

**AI Services (.env)**
```
OPENAI_API_KEY=your_openai_key
SHOTSTACK_API_KEY=your_shotstack_key
PORT=5000
```

**Mobile App (.env)**
```
EXPO_PUBLIC_API_URL=http://localhost:3000
```

## 📱 Mobile App Development

### Running on iOS

```bash
cd mobile-app
pnpm run ios
```

### Running on Android

```bash
cd mobile-app
pnpm run android
```

### Building for Production

```bash
# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Memories
- `POST /api/memories` - Upload encrypted memory
- `GET /api/memories` - List user memories
- `GET /api/memories/:id` - Get specific memory
- `DELETE /api/memories/:id` - Delete memory

### Contacts
- `POST /api/contacts` - Create contact
- `GET /api/contacts` - List contacts
- `GET /api/contacts/:id` - Get specific contact

### AI Services
- `POST /ocr/scan` - Scan business card or QR code
- `POST /ocr/scan/qr` - Scan QR code only
- `POST /ocr/scan/business-card` - Scan business card only

### Jobs
- `POST /api/jobs/ocr` - Submit OCR job
- `POST /api/jobs/video-montage` - Submit video generation job
- `GET /api/jobs/:id` - Get job status

## 🔐 Security Architecture

Awareness Network uses a **zero-knowledge architecture**:

1. **Client-Side Encryption**: All sensitive data is encrypted on the device using NaCl (TweetNaCl)
2. **Public Key Cryptography**: Each user has a public/private key pair
3. **Encrypted Storage**: Only encrypted blobs are stored on the server
4. **No Server Access**: The server never has access to decryption keys or plaintext data

## 📄 Documentation

- [Whitepaper](whitepaper.md) - Comprehensive project overview
- [Technical Specifications](technical_specifications.md) - Architecture and design
- [OCR & QR Feature Guide](docs/OCR_QR_FEATURE.md) - Detailed feature documentation
- [App Store Submission Guide](docs/APP_STORE_SUBMISSION.md) - Publishing instructions
- [Privacy Policy](docs/PRIVACY_POLICY.md) - Privacy and data handling

## 🛠️ Technology Stack

### Mobile App
- **React Native** with **Expo**
- **Redux Toolkit** for state management
- **React Navigation** for routing
- **TweetNaCl** for encryption

### Backend
- **NestJS** (Node.js framework)
- **TypeORM** with **PostgreSQL**
- **JWT** authentication
- **bcrypt** for password hashing

### AI Services
- **Python 3.11**
- **OpenAI GPT-4** for OCR and analysis
- **OpenCV** for image processing
- **Flask** for API
- **Shotstack** for video generation

## 📊 Deployment

### Backend Deployment (Vercel)

The backend can be deployed to Vercel using the provided configuration.

### AI Services Deployment

The AI services can be deployed as a Docker container or to any Python hosting platform.

### Mobile App Deployment

Submit to Apple App Store and Google Play Store using Expo Application Services (EAS).

## 🤝 Contributing

This is a proprietary project. For inquiries, please contact the development team.

## 📝 License

Copyright © 2025 Awareness Network. All rights reserved.

## 📧 Contact

For questions or support, please contact: support@awareness-network.com

---

**Built with ❤️ using AI-powered development**
