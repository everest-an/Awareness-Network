# Quick Start Guide - Awareness Network

Welcome to Awareness Network! This guide will help you get the project up and running quickly.

## 📦 What You Have

A complete, production-ready AI-powered memory management platform with:

- ✅ Comprehensive English whitepaper
- ✅ Cross-platform mobile app (React Native)
- ✅ Backend API (NestJS + PostgreSQL)
- ✅ AI services (OCR, QR scanning, video generation)
- ✅ App Store submission assets
- ✅ Complete documentation

## 🚀 Quick Start (5 Minutes)

### Step 1: Upload to GitHub

```bash
# Navigate to the project
cd /home/ubuntu/Awareness-Network

# Create a new repository on GitHub at: https://github.com/new
# Name it: Awareness-Network

# Add remote and push (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/Awareness-Network.git
git push -u origin main
```

### Step 2: Test the Mobile App Locally

```bash
# Install dependencies
cd mobile-app
pnpm install

# Start the development server
pnpm start

# Scan the QR code with Expo Go app on your phone
```

### Step 3: Test the Backend Locally

```bash
# Install dependencies
cd ../backend
pnpm install

# Start PostgreSQL (if not running)
# Option 1: Docker
docker run --name awareness-postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres

# Option 2: Local PostgreSQL
# Make sure PostgreSQL is installed and running

# Create database
createdb awareness_network

# Copy environment file
cp .env.example .env

# Edit .env with your database credentials
nano .env

# Start the backend
pnpm run start:dev

# Test the API
curl http://localhost:3000/api/health
```

### Step 4: Test AI Services

```bash
# Create virtual environment
cd ../ai-services
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Set environment variables
export OPENAI_API_KEY=your_openai_api_key_here

# Start the OCR service
python src/ocr/api.py

# Test in another terminal
curl http://localhost:5000/health
```

## 📱 Testing the Full App

1. **Start all services**:
   - Backend: `cd backend && pnpm run start:dev`
   - AI Services: `cd ai-services && python src/ocr/api.py`
   - Mobile App: `cd mobile-app && pnpm start`

2. **Test features**:
   - Register a new account
   - Scan a business card (use a photo or take a new one)
   - Scan a QR code (WeChat, WhatsApp, or vCard)
   - Create a memory
   - View your contacts

## 🌐 Deploy to Production

See `DEPLOYMENT_GUIDE.md` for detailed deployment instructions.

### Quick Deploy Commands

**Backend to Vercel**:
```bash
cd backend
vercel --prod
```

**AI Services to Railway**:
```bash
# Connect your GitHub repo to Railway
# Select ai-services directory
# Add environment variables
# Deploy
```

**Mobile App to App Store**:
```bash
cd mobile-app
eas build --platform ios
eas submit --platform ios
```

## 📚 Important Files

| File | Description |
|------|-------------|
| `README.md` | Project overview |
| `PROJECT_SUMMARY.md` | Complete project summary |
| `DEPLOYMENT_GUIDE.md` | Deployment instructions |
| `whitepaper.md` | Comprehensive whitepaper |
| `technical_specifications.md` | Technical architecture |
| `docs/OCR_QR_FEATURE.md` | OCR/QR feature guide |
| `docs/APP_STORE_SUBMISSION.md` | App Store guide |
| `docs/PRIVACY_POLICY.md` | Privacy policy |

## 🔑 Required API Keys

To run the full application, you'll need:

1. **OpenAI API Key** (for OCR)
   - Get it from: https://platform.openai.com/api-keys
   - Used in: AI services

2. **Shotstack API Key** (for video generation)
   - Get it from: https://shotstack.io
   - Used in: AI services

3. **Apple Developer Account** (for App Store)
   - Cost: $99/year
   - Required for: App Store submission

## 🗄️ Database Setup

### Option 1: Local PostgreSQL

```bash
# Install PostgreSQL
# macOS: brew install postgresql
# Ubuntu: sudo apt install postgresql

# Create database
createdb awareness_network

# Update backend/.env with connection details
```

### Option 2: Cloud Database (Recommended for Production)

- **Vercel Postgres**: `vercel postgres create`
- **Supabase**: https://supabase.com (free tier available)
- **Railway**: https://railway.app (easy setup)

## 🧪 Testing Checklist

- [ ] Backend API responds at `/api/health`
- [ ] AI services respond at `/health`
- [ ] Mobile app connects to backend
- [ ] User registration works
- [ ] User login works
- [ ] Business card scanning works
- [ ] QR code scanning works
- [ ] Memory creation works
- [ ] Contact creation works

## 🆘 Troubleshooting

### Backend won't start
```bash
# Check if PostgreSQL is running
pg_isready

# Check environment variables
cat backend/.env

# View logs
cd backend && pnpm run start:dev
```

### Mobile app can't connect
```bash
# Check API URL in mobile-app/src/services/api.ts
# Make sure backend is running
# Check CORS settings in backend/src/main.ts
```

### AI services failing
```bash
# Check OPENAI_API_KEY is set
echo $OPENAI_API_KEY

# Check Python version
python3 --version  # Should be 3.11+

# Reinstall dependencies
pip install -r requirements.txt
```

## 📞 Need Help?

1. Check the comprehensive documentation in `/docs`
2. Review `DEPLOYMENT_GUIDE.md` for deployment issues
3. Review `docs/OCR_QR_FEATURE.md` for feature details

## 🎉 You're All Set!

Your Awareness Network project is ready to:
- ✅ Run locally for development
- ✅ Deploy to production
- ✅ Submit to App Store
- ✅ Scale to thousands of users

**Happy building!** 🚀
